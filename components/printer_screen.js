import classNames from 'classnames';

import Target from 'shared/components/target/0.2';
import Dropzone from 'shared/components/dropzone/0.4';
import Draggable from 'shared/components/draggable/0.4';

const OBJECTS = [
    'umbrella',
    'glasses',
    'tire',
    'shovel',
    'link',
    'bucket',
    'boots',
    'gloves',
    'whistle',
    'cup',
    'phone',
    'piece',
    'tooth',
    'ball',
];

const TARGETS = [
    'tire',
    'link',
    'cup',
    'phone',
    'tooth',
];

let onStart = function () {
    _.each(this.refs.bottom.refs.slider.refs, slide => {
        _.each(slide.refs, draggable => {
            draggable.markIncorrect();
        });
    });
};

let startGame = function () {
    skoash.trigger('updateState', {
        path: 'reveal',
        data: {
            open: 'drag-it-here',
        },
    });
};

let onCorrect = function (dropped) {
    skoash.trigger('updateState', {
        path: 'printed',
        data: dropped,
    });
    skoash.trigger('updateState', {
        path: 'sfx',
        data: {
            playing: 'print'
        },
    });
};

let reset = function () {
    _.each(['printed', 'transition', 'layer1', 'layer2', 'layer3'], v => {
        skoash.trigger('updateState', {
            path: v,
            data: false,
        });
    });
};

export default function (props, ref, key) {
    let closeReveal;
    let onPrinted;
    let onTransitionEnd;

    closeReveal = function () {
        skoash.trigger('updateState', {
            path: 'reveal',
            data: {
                close: true,
            },
        });

        if (_.get(props, 'data.setTarget', 0) > 4) {
            skoash.trigger('goto', {
                index: parseInt(props.index, 10) + 1,
            });
        }
    };

    onPrinted = function () {
        var dropped = _.get(props, 'data.printed');

        if (dropped.props.message === _.get(props, 'data.target.object.props.name')) {
            dropped.markCorrect();
            skoash.trigger('updateState', {
                path: 'transition',
                data: true,
            });
        } else {
            dropped.markIncorrect();
            reset();
            skoash.trigger('updateState', {
                path: 'sfx',
                data: {
                    playing: 'incorrect',
                },
            });
            skoash.trigger('updateState', {
                path: 'reveal',
                data: {
                    open: 'try-again',
                },
            });
        }
    };

    onTransitionEnd = function () {
        if (!_.get(props, 'data.transition')) return;
        skoash.trigger('updateState', {
            path: 'sfx',
            data: {
                playing: 'correct',
            },
        });
        skoash.trigger('updateState', {
            path: 'reveal',
            data: {
                open: _.get(props, 'data.printed.props.message'),
            },
        });
        if (_.get(props, 'data.setTarget', 0) < 4) reset();
        skoash.trigger('updateState', {
            path: 'setTarget',
            data: _.get(props, 'data.setTarget', 0) + 1,
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="printer"
            onStart={onStart}
        >
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'sprite.game2.carouselarrow.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'sprite.game2.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.IMAGE + 'img.printer.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.IMAGE + 'img.leftbox.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'sprite.game2.brokenobj.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.IMAGE + 'img.winframe.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.IMAGE + 'img.popup.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.IMAGE + 'bkg.3.jpg'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.IMAGE + 'img.sparkle.png'}
            />
            <skoash.MediaCollection
                play={_.get(props, 'data.sfx.playing')}
            >
                <skoash.MediaSequence
                  ref="print"
                  silentOnStart
                >
                    <skoash.Audio
                        type="sfx"
                        playTarget="layer1"
                        src={CMWN.MEDIA.EFFECT + 'Printing.mp3'}
                        sprite={[0, 1700]}
                    />
                    <skoash.Audio
                        type="sfx"
                        playTarget="layer2"
                        src={CMWN.MEDIA.EFFECT + 'Printing.mp3'}
                        sprite={[0, 1700]}
                    />
                    <skoash.Audio
                        type="sfx"
                        playTarget="layer3"
                        src={CMWN.MEDIA.EFFECT + 'Printing.mp3'}
                        onComplete={onPrinted}
                        sprite={[0, 1700]}
                    />
                </skoash.MediaSequence>
                <skoash.Audio
                    type="sfx"
                    ref="correct"
                    src={CMWN.MEDIA.EFFECT + 'Correct2.mp3'}
                />
                <skoash.Audio
                    type="sfx"
                    ref="incorrect"
                    complete
                    src={CMWN.MEDIA.EFFECT + 'Incorrect2.mp3'}
                />
            </skoash.MediaCollection>
            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open')}
            >
                <skoash.Audio
                    type="voiceOver"
                    ref="instructions"
                    src={CMWN.MEDIA.VO + 'VO_drag_item.mp3'}
                />
                <skoash.Audio
                    type="voiceOver"
                    ref={TARGETS[0]}
                    src={CMWN.MEDIA.VO + 'VO_level1_great.mp3'}
                />
                <skoash.Audio
                    type="voiceOver"
                    ref={TARGETS[1]}
                    src={CMWN.MEDIA.VO + 'VO_level2_amazing.mp3'}
                />
                <skoash.Audio
                    type="voiceOver"
                    ref={TARGETS[2]}
                    src={CMWN.MEDIA.VO + 'VO_level3_excellent.mp3'}
                />
                <skoash.Audio
                    type="voiceOver"
                    ref={TARGETS[3]}
                    src={CMWN.MEDIA.VO + 'VO_level4_one_more.mp3'}
                />
                <skoash.Audio
                    type="voiceOver"
                    ref={TARGETS[4]}
                    src={CMWN.MEDIA.VO + 'VO_level5_wizard.mp3'}
                />
            </skoash.MediaCollection>
            <skoash.Component className="targets">
                <div>
                    What <span>ITEM</span> can<br/>
                    solve this problem?
                </div>
                <Target
                    setTarget={_.get(props, 'data.setTarget', 0)}
                    checkComplete={false}
                    complete={_.get(props, 'data.setTarget', 0) > 4}
                    targets={[
                        <skoash.Component name={TARGETS[0]} />,
                        <skoash.Component name={TARGETS[1]} />,
                        <skoash.Component name={TARGETS[2]} />,
                        <skoash.Component name={TARGETS[3]} />,
                        <skoash.Component name={TARGETS[4]} />,
                    ]}
                />
            </skoash.Component>
            <Dropzone
                dropped={_.get(props, 'data.draggable.dropped')}
                dropzones={[
                    <skoash.Component
                    answers={OBJECTS}
                    className={classNames(_.get(props, 'data.printed.props.message'), {
                        transition: _.get(props, 'data.transition'),
                        layer1: _.get(props, 'data.layer1.playing'),
                        layer2: _.get(props, 'data.layer2.playing'),
                        layer3: _.get(props, 'data.layer3.playing'),
                    })}
                    onTransitionEnd={onTransitionEnd}
                  />
                ]}
                onCorrect={onCorrect}
            />
            <skoash.Component ref="bottom" className="bottom">
                <div>
                    <span>DRAG AND DROP</span> the item onto the printer above
                </div>
                <skoash.Slider ref="slider">
                    <skoash.Component>
                        <Draggable
                            returnOnIncorrect
                            stayOnCorrect={false}
                            message={OBJECTS[0]}
                        />
                        <Draggable
                            returnOnIncorrect
                            stayOnCorrect={false}
                            message={OBJECTS[1]}
                        />
                        <Draggable
                            returnOnIncorrect
                            stayOnCorrect={false}
                            message={OBJECTS[2]}
                        />
                        <Draggable
                            returnOnIncorrect
                            stayOnCorrect={false}
                            message={OBJECTS[3]}
                        />
                    </skoash.Component>
                    <skoash.Component>
                        <Draggable
                            returnOnIncorrect
                            stayOnCorrect={false}
                            message={OBJECTS[4]}
                        />
                        <Draggable
                            returnOnIncorrect
                            stayOnCorrect={false}
                            message={OBJECTS[5]}
                        />
                        <Draggable
                            returnOnIncorrect
                            stayOnCorrect={false}
                            message={OBJECTS[6]}
                        />
                        <Draggable
                            returnOnIncorrect
                            stayOnCorrect={false}
                            message={OBJECTS[7]}
                        />
                    </skoash.Component>
                    <skoash.Component>
                        <Draggable
                            returnOnIncorrect
                            stayOnCorrect={false}
                            message={OBJECTS[8]}
                        />
                        <Draggable
                            returnOnIncorrect
                            stayOnCorrect={false}
                            message={OBJECTS[9]}
                        />
                        <Draggable
                            returnOnIncorrect
                            stayOnCorrect={false}
                            message={OBJECTS[10]}
                        />
                        <Draggable
                            returnOnIncorrect
                            stayOnCorrect={false}
                            message={OBJECTS[11]}
                        />
                    </skoash.Component>
                    <skoash.Component>
                        <Draggable
                            returnOnIncorrect
                            stayOnCorrect={false}
                            message={OBJECTS[12]}
                        />
                        <Draggable
                            returnOnIncorrect
                            stayOnCorrect={false}
                            message={OBJECTS[13]}
                        />
                    </skoash.Component>
                </skoash.Slider>
            </skoash.Component>
            <skoash.Reveal
                openTarget="reveal"
                openOnStart="instructions"
                openReveal={_.get(props, 'data.reveal.open')}
                closeReveal={_.get(props, 'data.reveal.close')}
                list={[
                    <skoash.Component
                        type="li"
                        data-ref="instructions"
                    >
                        <h3>
                              Instructions
                        </h3>
                        <div>
                            <span>DRAG</span> the item onto the<br/>
                            3D printer that is the solution<br/>
                            for each situation.
                        </div>
                        <button onClick={startGame} />
                    </skoash.Component>,
                    <skoash.Component
                        type="li"
                        data-ref="drag-it-here"
                        onClick={closeReveal}
                    >
                        <div>
                            Drag it here.<br/>
                            Press anywhere on the screen<br/>
                            to continue.
                        </div>
                    </skoash.Component>,
                    <skoash.Component
                        type="li"
                        ref={TARGETS[0]}
                    >
                        <h3>
                            GREAT JOB!
                        </h3>
                        <div>
                            Let’s see if you can<br/>
                            figure out this next one!
                        </div>
                        <button onClick={closeReveal} />
                    </skoash.Component>,
                    <skoash.Component
                        type="li"
                        ref={TARGETS[1]}
                    >
                        <h3>
                            YOU HAVE AMAZING<br/>
                            PROBLEM-SOLVING<br/>
                            SKILLS!
                        </h3>
                        <div>
                            But this one might be harder…
                        </div>
                        <button onClick={closeReveal} />
                    </skoash.Component>,
                    <skoash.Component
                        type="li"
                        ref={TARGETS[2]}
                    >
                        <h3>
                            EXCELLENT<br/>
                            WORK!
                        </h3>
                        <div>
                            Can you solve this next one?
                        </div>
                        <button onClick={closeReveal} />
                    </skoash.Component>,
                    <skoash.Component
                        type="li"
                        ref={TARGETS[3]}
                    >
                        <h3>
                            YOU’VE DONE<br/>
                            IT AGAIN!
                        </h3>
                        <div>
                            Just one more to go!
                        </div>
                        <button onClick={closeReveal} />
                    </skoash.Component>,
                    <skoash.Component
                        type="li"
                        ref={TARGETS[4]}
                    >
                        <h3>
                            YOU’RE A<br/>
                            3D PRINTING<br/>
                            WIZARD
                        </h3>
                        <div>
                            and have solved all the problems!<br/>
                            Thanks for playing!
                        </div>
                        <button onClick={closeReveal} />
                    </skoash.Component>,
                    <skoash.Component
                        type="li"
                        data-ref="try-again"
                    >
                        <h3>
                            TRY<br/>
                            AGAIN
                        </h3>
                        <button onClick={closeReveal} />
                    </skoash.Component>,
                ]}
            />
        </skoash.Screen>
    );
}
