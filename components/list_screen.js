import Draggable from 'shared/components/draggable/0.4';
import Dropzone from 'shared/components/dropzone/0.4';

let onDrag = function () {
    this.setState({
        correct: false,
        return: false,
    });
    this.updateGameState({
        path: 'sfx',
        data: {
            playing: 'drag',
        },
    });
};

let testComplete = function () {
    if (this.refs['dropzone-0'].contains.length) this.complete();
    else this.incomplete();
};

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="list"
        >
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'sprite.minion.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.IMAGE + 'img.notepad.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'sprite.game3.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.IMAGE + 'img.greenarrows.png'}
            />
            <skoash.Audio
                type="voiceOver"
                src={CMWN.MEDIA.VO + 'VO_drag_and.mp3'}
            />
            <skoash.MediaCollection
                play={_.get(props, 'data.sfx.playing')}
            >
                <skoash.Audio
                    ref="drag"
                    type="sfx"
                    completeTarget="sfx"
                    src={CMWN.MEDIA.EFFECT + 'Drag.mp3'}
                />
            </skoash.MediaCollection>
            <skoash.Repeater
                className="draggables"
                amount={13}
                item={<Draggable
                    return
                    returnOnIncorrect
                    onDrag={onDrag}
                />}
                props={[
                    {message: 'shoe'},
                    {message: 'lego'},
                    {message: 'dice'},
                    {message: 'ball'},
                    {message: 'crown'},
                    {message: 'bunny'},
                    {message: 'chess'},
                    {message: 'helmet'},
                    {message: 'bowling'},
                    {message: 'cup'},
                    {message: 'controller'},
                    {message: 'headphones'},
                    {message: 'guitar'},
                ]}
            />
            <div className="arrows">
                <div/>
                <div/>
                <div/>
            </div>
            <Dropzone
                checkComplete={false}
                onDrag={testComplete}
                onCorrect={testComplete}
                dropped={_.get(props, 'data.draggable.dropped')}
                dragging={_.get(props, 'data.draggable.dragging')}
                dropzones={[
                    <skoash.Component>
                        <span>LIST OF ITEMS</span>
                    </skoash.Component>
                ]}
            />
            <div className="words">
                <span>Drag and Drop</span><br/>
                the items to the list above.<br/>
                Choose as many as you like.
            </div>
        </skoash.Screen>
    );
}
