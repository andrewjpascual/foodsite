import React from "react";
import fe1 from "../../assets/images/feature1.png";
import fe2 from "../../assets/images/feature2.png";
import fe3 from "../../assets/images/feature3.png";
import "./Features.css";

function Features() {
  return (
    <>
      <div className="features-container">
        <div className="features-item">
          <div className="features-flex">
            <div className="features-img">
              <img src={fe1} alt="First feature" />
            </div>
            <div className="features-desc">
              <h2>The Fastest in the Game</h2>
              <p>
                Whether gaming or creating, you can achieve the ultimate
                performance. Purchase the next series processors to power the
                next generation of demanding games, providing one of a kind
                immersive experience and dominate any multithreaded task.
              </p>
              <br />
              <p>
                AMD Ryzen™ 5000 G-Series processors feature the fastest graphics
                performance4 available in a desktop processor or pair with a
                graphics card to supercharge your gaming performance.
              </p>
            </div>
          </div>
        </div>

        <div className="features-item">
          <div className="features-flex">
            <div className="features-desc">
              <h2>The Latest Technologies</h2>
              <p>
                Edgeless Design completely immerses you in all the captivation
                action and wondrous scenery that 1080P resolution and 144Hz
                refresh rate have to offer.
              </p>
              <p>
                1500R curved monitor (VA panel) wrapping around your vision for
                an immersive gaming experience.
              </p>
            </div>
            <div className="features-img">
              <img src={fe2} alt="First feature" />
            </div>
          </div>
        </div>

        <div className="features-item">
          <div className="features-flex">
            <div className="features-img">
              <img src={fe3} alt="First feature" />
            </div>
            <div className="features-desc">
              <h2>Build with Confidence</h2>
              <p>
                Not only are the processors drop-in ready on select series
                motherboards, with a simple BIOS update you can easily tweak and
                tune your processors and take the performance to the next level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
