import classNames from 'classnames';

let onStart = function () {
    this.updateGameState({
        key: 'start',
        data: true,
    });
};

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="lets-learn"
            onStart={onStart}
        >
            <skoash.Audio
                type="voiceOver"
                src={CMWN.MEDIA.VO + 'VO_lets.mp3'}
            />
            <skoash.Audio
                type="sfx"
                ref="start"
                src={CMWN.MEDIA.EFFECT + 'text_type.mp3'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'sprite.closeupminion.png'}
            />
            <skoash.Image
                className="balloon"
                src={CMWN.MEDIA.IMAGE + 'speech.balloon.1.png'}
            />
            <skoash.Component>
                <div
                    className={classNames('words', {
                        start: _.get(props, 'data.start'),
                    })}
                >
                    <div>
                        <p>
                            Let’s learn about the
                        </p>
                    </div>
                    <div>
                        <p>
                            3D printing process
                        </p>
                    </div>
                    <div>
                        <p>
                            with this video
                        </p>
                    </div>
                </div>
            </skoash.Component>
        </skoash.Screen>
    );
}
