export default function (props, ref, key, what) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="already-exists"
        >
            <skoash.Component>
                <div className="words">
                    <div>
                        It already exists
                    </div>
                    <div>
                        today. It’s called
                    </div>
                    <div>
                        3D printing!
                    </div>
                </div>
            </skoash.Component>
        </skoash.Screen>
    );
}
