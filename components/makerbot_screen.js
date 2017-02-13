export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="makerbot"
            className="level-up"
        >
            <skoash.Component>
                <div className="words">
                    <h3>
                        Did You Know?
                    </h3>
                    <div>
                        MakerBot Factory in Brooklyn, New York<br/>
                        uses 3D printers to print<br/>
                        even more 3D printers!
                    </div>
                </div>
            </skoash.Component>
        </skoash.Screen>
    );
}
