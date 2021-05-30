import React from 'react';
import Fade from 'react-reveal/Fade';

const WorkedOn = () => {
    return (
        <Fade up>
            <section id="worked-on">
                <small>Get to know my recent work</small>
                <h2>Things I've worked on</h2>
                <div className="work-items">
                    <div className="work-items__item">
                        <img src="http://www.bobby.so/6abda4ff7077e485c7ddb66ec4e3fb05.png" alt="alal" />
                        <div className="text">
                            Human is a home for building a joyful world
                        </div>
                    </div>
                    <div className="work-items__item">
                        <img src="http://www.bobby.so/6abda4ff7077e485c7ddb66ec4e3fb05.png" alt="alal" />
                        <div className="text">
                            Human is a home for building a joyful world
                        </div>
                    </div>
                    <div className="work-items__item">
                        <img src="http://www.bobby.so/6abda4ff7077e485c7ddb66ec4e3fb05.png" alt="alal" />
                        <div className="text">
                            Human is a home for building a joyful world
                        </div>
                    </div>
                    <div className="work-items__item">
                        <img src="http://www.bobby.so/6abda4ff7077e485c7ddb66ec4e3fb05.png" alt="alal" />
                        <div className="text">
                            Human is a home for building a joyful world
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    )
}

export default WorkedOn;