import React from 'react';
import Fade from 'react-reveal/Fade';

const WorkedOn = () => {
    return (
        <Fade left>
            <section id="worked-on">
                <small>Get to know my recent work</small>
                <h2>Who I worked with</h2>
                <div className="work-items">
                    <div className="work-items__item">
                        <img src="/static/renegades.png" alt="alal" />
                        <div className="text">
                            Renegades is a professional esports organization with teams competing in Valorant, COD, Rocket League, CS:GO...
                        </div>
                    </div>
                    <div className="work-items__item">
                        <img src="/static/everland.png" alt="alal" />
                        <div className="text">
                            Everland is a social MMO.
                        </div>
                    </div>
                    <div className="work-items__item">
                        <img src="/static/narcitymedia.png" alt="Narcity Media" />
                        <div className="text">
                            Narcity Media Inc. is a Canadian online media company that owns and operates Narcity and MTL Blog.
                        </div>
                    </div>
                    <div className="work-items__item">
                        <img src="/static/thespike.png" alt="alal" />
                        <div className="text">
                            THESPIKE.GG is the leading website for VALORANT News, VALORANT Event Coverage & VALORANT Team Rankings.
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    )
}

export default WorkedOn;