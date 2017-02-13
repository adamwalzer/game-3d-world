const src = 'https://res.cloudinary.com/changemyworldnow/video/upload/v1479831566/' +
    '3D_Printing_FINAL_FILE_SMALLER_pfzv84.mp4';

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
