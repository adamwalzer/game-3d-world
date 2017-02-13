import classNames from 'classnames';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="many-materials"
            onStart={function () {
                this.updateGameState({
                    path: 'start',
                    data: true,
                });
            }}
        >
            <skoash.Audio
                type="voiceOver"
                src={CMWN.MEDIA.VO + 'VO_wow.mp3'}
            />
            <skoash.MediaSequence>
                <skoash.Audio
                    type="sfx"
                    src={CMWN.MEDIA.EFFECT + 'text_type.mp3'}
                />
                <skoash.Audio
                    type="sfx"
                    src={CMWN.MEDIA.EFFECT + 'text_type.mp3'}
                    sprite={[0, 1000]}
                />
            </skoash.MediaSequence>
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'sprite.closeupminion.png'}
            />
            <skoash.Image
                className="balloon"
                src={CMWN.MEDIA.IMAGE + 'speech.balloon.frame7.png'}
            />
            <skoash.Component>
                <div
                    className={classNames('words', {
                        start: _.get(props, 'data.start'),
                    })}
                >
                    <div>
                        <p>
                            Wow, there are many materials you can use
                        </p>
                    </div>
                    <div>
                        <p>
                            to make things with a 3D printer!
                        </p>
                    </div>
                    <div>
                        <p>
                            The most common are plastic and metal,
                        </p>
                    </div>
                    <div>
                        <p>
                            but other materials can be used.
                        </p>
                    </div>
                </div>
            </skoash.Component>
        </skoash.Screen>
    );
}
