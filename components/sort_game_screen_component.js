import Dropper from 'shared/components/dropper/0.3';
import Catcher from 'shared/components/catcher/0.2';
import Catchable from 'shared/components/catchable/0.1';

let categoryArray = [
    {
        name: 'metal',
        items: [
            'fork',
            'robot',
            'slinky',
            'nails',
            'gears',
            'key',
        ]
    },
    {
        name: 'other',
        items: [
            'shoes',
            'cake',
            'block',
            'burger',
            'pizza',
        ]
    },
    {
        name: 'plastic',
        items: [
            'truck',
            'dice',
            'lego',
            'glasses',
        ]
    }
];

let catchablesArray = _.reduce(categoryArray, (a, category) =>
    a.concat(_.map(category.items, item =>
        <Catchable
            className={item}
            message={category.name}
        />
    ))
, []);

let onCloseReveal = function () {
    this.updateGameState({
        path: 'game',
        data: {
            stop: false,
            start: true,
            restart: false,
        },
    });
    this.updateGameState({
        path: 'closeReveal',
        data: false,
    });
    this.updateGameState({
        path: 'openReveal',
        data: null,
    });
    this.updateGameState({
        path: 'score',
        data: {
            correct: 0,
            incorrect: 0,
        }
    });
};

let onScoreComplete = function () {
    this.updateGameState({
        path: 'openReveal',
        data: 'level-up',
    });
    this.updateGameState({
        path: 'game',
        data: {
            complete: true,
        },
    });
};

let onAddClassName = function (className) {
    if (className === 'go') return;
    this.updateGameState({
        path: 'sfx',
        data: {
            playing: 'print'
        }
    });
};

export default function (props, ref, key, opts = {}) {
    let start = _.get(props, 'data.game.start', false);
    let complete = _.get(props, 'data.game.complete', false);
    let correct = _.get(props, 'data.score.correct', 0);
    let incorrect = _.get(props, 'data.score.incorrect', 0);
    let paused = _.get(props, 'gameState.paused');

    let onTimerComplete = function () {
        if (_.get(props, 'data.openReveal') === 'level-up') return;
        this.updateGameState({
            path: 'openReveal',
            data: 'try-again',
        });
        this.updateGameState({
            path: 'game',
            data: {
                start: false,
            },
        });
    };

    let onCorrectCatch = function (bucketRef) {
        bucketRef.addClassName('correct');
        setTimeout(() => {
            bucketRef.removeClassName('correct');
        }, 1000);
        this.updateGameState({
            path: 'score',
            data: {
                correct: correct + 1,
            },
        });
    };

    let onIncorrectCatch = function (bucketRef) {
        bucketRef.addClassName('incorrect');
        setTimeout(() => {
            bucketRef.removeClassName('incorrect');
        }, 1000);
        this.updateGameState({
            path: 'score',
            data: {
                incorrect: incorrect + 1,
            },
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={opts.id}
        >
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.IMAGE + 'thick.border.png'}
            />
            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open')}
                children={opts.vos}
            />
            <skoash.MediaCollection
                play={_.get(props, 'data.sfx.playing')}
                children={opts.sfx}
            />
            <skoash.Component className="left">
                <skoash.Score
                    max={100}
                    increment={10}
                    correct={correct}
                    incorrect={incorrect}
                    onComplete={onScoreComplete}
                >
                  <div />
                </skoash.Score>
                <skoash.Timer
                    countDown
                    timeout={opts.timeout}
                    leadingContent="TIME LEFT"
                    stop={complete}
                    complete={complete}
                    checkComplete={start}
                    restart={start}
                    onComplete={onTimerComplete}
                />
            </skoash.Component>
            <skoash.Component className="main">
                <skoash.Image
                    className="hidden"
                    src={CMWN.MEDIA.SPRITE + 'sprite.game1.bins.png'}
                />
                <skoash.Image
                    className="hidden"
                    src={CMWN.MEDIA.SPRITE + 'sprite.game1.png'}
                />
                <skoash.Image
                    className="hidden"
                    src={CMWN.MEDIA.SPRITE + 'sprite.game1.printer.png'}
                />
                <skoash.Image
                    className="hidden"
                    src={CMWN.MEDIA.IMAGE + 'plus.png'}
                />
                <Dropper
                    on={start && !paused}
                    start={start}
                    stop={complete}
                    prepClasses={['starting', 'ready', 'set', 'go']}
                    prepTimeout={opts.prepTimeout}
                    onAddClassName={onAddClassName}
                    bin={
                      <skoash.Randomizer
                          completeOnStart
                          checkComplete={false}
                          bin={catchablesArray}
                      />
                    }
                >
                    <div className="left">
                        <div />
                        <div />
                        <div />
                    </div>
                    <div className="right">
                        <div />
                        <div />
                        <div />
                    </div>
                </Dropper>
                <Catcher
                    completeOnStart
                    checkComplete={false}
                    start={start}
                    bucket={[
                        <skoash.Component className="plastic" message="plastic" />,
                        <skoash.Component className="metal" message="metal" />,
                        <skoash.Component className="other" message="other" />,
                    ]}
                    catchableRefs={_.get(props, 'data.dropper.refs', [])}
                    onCorrect={onCorrectCatch}
                    onIncorrect={onIncorrectCatch}
                    assets={[
                        <skoash.Audio
                            type="voiceOver"
                            ref="correct"
                            src={CMWN.MEDIA.EFFECT + 'Correct.mp3'}
                        />,
                        <skoash.Audio
                            type="voiceOver"
                            ref="incorrect"
                            src={CMWN.MEDIA.EFFECT + 'Incorrect.mp3'}
                        />,
                    ]}
                />
            </skoash.Component>
            <skoash.Reveal
                openOnStart={opts.openOnStart}
                openTarget="reveal"
                openReveal={_.get(props, 'data.openReveal', false)}
                closeReveal={_.get(props, 'data.reveal.close', false)}
                onClose={onCloseReveal}
                list={opts.revealList}
            />
        </skoash.Screen>
    );
}
