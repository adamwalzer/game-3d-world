export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="environment"
            className="level-up"
        >
            <skoash.Component>
                <div className="words">
                    <h3>
                        Did You Know?
                    </h3>
                    <div>
                        3D printing can be better<br/>
                        for the environment than standard<br/>
                        manufacturing, because there is<br/>
                        much less waste!
                    </div>
                </div>
            </skoash.Component>
        </skoash.Screen>
    );
}
