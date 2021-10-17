import React, { useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import Ztext from "react-ztext";
import Reward from 'react-rewards';

const Headliner = () => {
  const confettiCannon = useRef(null);

  const showConfetti = () => {
    if (confettiCannon.current) {
      confettiCannon.current.rewardMe();
    }
  }

  return (
    <div id="headliner">
      <Fade up>
        <h1 className="name-header">
          Mike Pechousek
          <Ztext
            depth="1.3rem"
            direction="both"
            event="pointer"
            eventRotation="35deg"
            eventDirection="both"
            fade={false}
            layers={10}
            perspective="700px"
          >
            <Reward config={{springAnimation: false}} ref={confettiCannon} type="confetti">
              <span onClick={() => showConfetti()} className="emoji-3d">👋</span>
            </Reward>
          </Ztext>
        </h1>
        <p>
          is building awesome products that help shape the 🌎 for the better.
        </p>
        <p className="light-grey">
          Co-founder at <a href="https://omnidata.io">OmniData</a>. Currently working at <a href="https://bananatag.com">Bananatag 🍌</a> as a <b>Software Developer III</b>
        </p>
        <p className="light-grey">
          Read more about <a href="#">my past experiences 🔮</a>
        </p>
      </Fade>
    </div>
  );
};

export default Headliner;
