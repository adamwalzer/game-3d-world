export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="congratulations"
        >
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'sprite.minion.png'}
            />
            <skoash.Audio
                type="voiceOver"
                src={CMWN.MEDIA.VO + 'VO_Congratulations.mp3'}
            />
            <div>
                CONGRATULATIONS!
            </div>
            <div>
                YOU’VE
            </div>
            <div>
                WON
            </div>
            <div>
                THE
            </div>
            <div>
                GAME
            </div>
        </skoash.Screen>
    );
}
