export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="even-food"
            className="level-up"
        >
            <skoash.Component>
                <div className="words">
                    <h3>
                        Did You Know?
                    </h3>
                    <div>
                        Even food can be 3D printed!<br/>
                        While still in the experimental stages,<br/>
                        NASA hopes one day to print food<br/>
                        in space!
                    </div>
                </div>
            </skoash.Component>
        </skoash.Screen>
    );
}
