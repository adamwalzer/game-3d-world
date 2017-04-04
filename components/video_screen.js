const src = `${CMWN.MEDIA.VIDEO}3d-printing.mp4`;

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="video"
        >
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.IMAGE + 'vid.scrn.png'}
            />
            <skoash.Component>
                <skoash.Video src={src} />
            </skoash.Component>
        </skoash.Screen>
    );
}
