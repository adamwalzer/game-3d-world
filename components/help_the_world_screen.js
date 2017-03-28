import classNames from 'classnames';

let jobs = [
    'designer',
    'architect',
    'surgeon',
    'engineer',
    'dentist',
    'artist',
];

let onClose = function () {
    skoash.trigger('updateState', {
        path: 'selectable',
        data: {
            target: null
        }
    });
    skoash.trigger('updateState', {
        path: 'reveal',
        data: {
            open: null
        }
    });
};

export default function (props, ref, key) {
    let nextPhoto = function () {
        skoash.trigger('updateState', {
            path: 'selectable',
            data: {
                select: jobs[
                    (jobs.indexOf(_.get(props, 'data.selectable.target.props.data-ref')) + 1) % jobs.length
                ]
            }
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="help-the-world"
        >
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'sprite.minion.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'sprite.realworldgallery.png'}
            />
            <skoash.MediaSequence>
                <skoash.Audio
                    type="voiceOver"
                    src={CMWN.MEDIA.VO + 'ThereAreMany.mp3'}
                    completeTarget="many"
                    volume={4}
                    maxVolume={4}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={CMWN.MEDIA.VO + 'VO_and_many.mp3'}
                />
            </skoash.MediaSequence>
            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open')}
            >
              <skoash.Audio
                  type="voiceOver"
                  ref={jobs[0]}
                  src={CMWN.MEDIA.VO + 'VO_Product_Designers.mp3'}
              />
              <skoash.Audio
                  type="voiceOver"
                  ref={jobs[1]}
                  src={CMWN.MEDIA.VO + 'VO_Architects.mp3'}
              />
              <skoash.Audio
                  type="voiceOver"
                  ref={jobs[2]}
                  src={CMWN.MEDIA.VO + 'VO_Surgeons.mp3'}
              />
              <skoash.Audio
                  type="voiceOver"
                  ref={jobs[3]}
                  src={CMWN.MEDIA.VO + 'VO_Engineers.mp3'}
              />
              <skoash.Audio
                  type="voiceOver"
                  ref={jobs[4]}
                  src={CMWN.MEDIA.VO + 'VO_Dentists.mp3'}
              />
              <skoash.Audio
                  type="voiceOver"
                  ref={jobs[5]}
                  src={CMWN.MEDIA.VO + 'VO_Artists.mp3'}
              />
            </skoash.MediaCollection>
            <div className="header">
                <p className={classNames({show: !_.get(props, 'data.many.complete')})} >
                    There are many things<br/>
                    you can create<br/>
                    with your 3D printer...
                </p>
                <p className={classNames({show: _.get(props, 'data.many.complete')})} >
                    …and many ways to help the world<br/>
                    with the wonderful things you create!<br/>
                    Click on the image to expand.
                </p>
            </div>
            <skoash.Selectable
                dataTarget="selectable"
                selectClass="HIGHLIGHTED"
                select={_.get(props, 'data.selectable.select')}
                list={[
                    <skoash.Component
                        type="li"
                        data-ref={jobs[0]}
                    />,
                    <skoash.Component
                        type="li"
                        data-ref={jobs[1]}
                    />,
                    <skoash.Component
                        type="li"
                        data-ref={jobs[2]}
                    />,
                    <skoash.Component
                        type="li"
                        data-ref={jobs[3]}
                    />,
                    <skoash.Component
                        type="li"
                        data-ref={jobs[4]}
                    />,
                    <skoash.Component
                        type="li"
                        data-ref={jobs[5]}
                    />,
                ]}
            />
            <skoash.Reveal
                openTarget="reveal"
                openReveal={_.get(props, 'data.selectable.target.props.data-ref')}
                onClose={onClose}
                list={[
                    <skoash.Component
                        type="li"
                        data-ref={jobs[0]}
                    >
                        <h3>
                            Product designers
                        </h3>
                        <div>
                            design and print useful objects for others!
                        </div>
                        <button className="next-photo" onClick={nextPhoto} />
                    </skoash.Component>,
                    <skoash.Component
                        type="li"
                        data-ref={jobs[1]}
                    >
                        <h3>
                            Architects
                        </h3>
                        <div>
                            create plans for housing that will<br/>
                            be 3D printed!
                        </div>
                        <button className="next-photo" onClick={nextPhoto} />
                    </skoash.Component>,
                    <skoash.Component
                        type="li"
                        data-ref={jobs[2]}
                    >
                        <h3>
                            Surgeon
                        </h3>
                        <div>
                            turn x-rays into 3D models<br/>
                            and repair injured body parts!
                        </div>
                        <button className="next-photo" onClick={nextPhoto} />
                    </skoash.Component>,
                    <skoash.Component
                        type="li"
                        data-ref={jobs[3]}
                    >
                        <h3>
                            Engineers
                        </h3>
                        <div>
                            make 3D models of your creations,<br/>
                            and then print the real thing!
                        </div>
                        <button className="next-photo" onClick={nextPhoto} />
                    </skoash.Component>,
                    <skoash.Component
                        type="li"
                        data-ref={jobs[4]}
                    >
                        <h3>
                            Dentists
                        </h3>
                        <div>
                            print replacement teeth for your patients!
                        </div>
                        <button className="next-photo" onClick={nextPhoto} />
                    </skoash.Component>,
                    <skoash.Component
                      type="li"
                      data-ref={jobs[5]}
                    >
                        <h3>
                            Artists
                        </h3>
                        <div>
                            express themselves through the magic<br/>
                            of 3D printing!
                        </div>
                        <button className="next-photo" onClick={nextPhoto} />
                    </skoash.Component>,
                ]}
            />
        </skoash.Screen>
    );
}
