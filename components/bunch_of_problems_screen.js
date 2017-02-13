export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="bunch-of-problems"
        >
            <skoash.Audio
                type="voiceOver"
                src={CMWN.MEDIA.VO + 'VO_coming_up.mp3'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'sprite.closeupminion.png'}
            />
            <skoash.Image
                className="balloon"
                src={CMWN.MEDIA.IMAGE + 'img.speechballoon.up.png'}
            />
            <div className="words">
                <div>
                    Coming up are a
                </div>
                <div>
                    bunch of problems
                </div>
                <div>
                    that need a 3D printer
                </div>
                <div>
                    to solve!
                </div>
            </div>
        </skoash.Screen>
    );
}
