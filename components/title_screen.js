export default function (props, ref, key) {
    return (
      <skoash.Screen
          {...props}
          ref={ref}
          key={key}
          id="title"
      >
          <skoash.Image src={CMWN.MEDIA.SPRITE + 'title.gif'} />
      </skoash.Screen>
    );
}
