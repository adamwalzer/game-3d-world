import SortGameScreenComponent from './sort_game_screen_component';

export default function (props, ref, key) {
    return SortGameScreenComponent(props, ref, key, {
        id: 'sort-game-level-one',
        timeout: 60000,
        prepTimeout: 500,
        vos: [
            <skoash.MediaSequence
                ref="level-up"
                silentOnStart
            >
                <skoash.Audio
                    type="voiceOver"
                    src={CMWN.MEDIA.EFFECT + 'level_up.mp3'}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={CMWN.MEDIA.VO + 'VO_did_you3.mp3'}
                />
            </skoash.MediaSequence>,
            <skoash.Audio
                type="voiceOver"
                ref="try-again"
                complete
                src={CMWN.MEDIA.VO + 'VO_try_again.mp3'}
            />,
        ],
        sfx: [
            <skoash.Audio
                type="voiceOver"
                completeTarget="sfx"
                ref="print"
                src={CMWN.MEDIA.EFFECT + 'print_item.mp3'}
                sprite={[0, 500]}
            />
        ],
        revealList: [
            <skoash.Component
                ref="level-up"
                type="li"
            >
                <skoash.Image
                    className="hidden"
                    src={CMWN.MEDIA.SPRITE + 'sprite.minion.png'}
                />
                <h3>
                    LEVEL UP
                </h3>
                <h4>
                    Did You Know?
                </h4>
                <div>
                    3D printing can be better<br/>
                    for the environment than standard<br/>
                    manufacturing, because there is<br/>
                    much less waste!
                </div>
            </skoash.Component>,
            <skoash.Component
                ref="try-again"
                type="li"
            >
                <skoash.Image
                    className="minion"
                    src={CMWN.MEDIA.IMAGE + 'try.again.minion.png'}
                />
                <skoash.Image
                    className="hidden"
                    src={CMWN.MEDIA.FRAME + 'try.again.frame.png'}
                />
                <skoash.Image
                    className="hidden"
                    src={CMWN.MEDIA.SPRITE + 'sprite.nav.png'}
                />
                <div>
                    <h3>
                        TRY AGAIN
                    </h3>
                    {'You didn\'t win this time —'}<br/>
                    {'but don\'t worry, you have another chance!'}
                </div>
            </skoash.Component>,
        ]
    });
}
