import { useState } from 'react'

import "./about.css"

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="about-area bg-grey section-ptb" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
              <div className="about-image text-center">
                <img src="/images/about/02.jpg" alt="About ecDoE" />

                <div className="about-video-button">
                  <button
                    className="video-btn"
                    onClick={() => setOpen(true)}
                  >
                    <i className="fa fa-play"></i>
                  </button>

                  <div className="video-animation">
                    <div className="animation animation-1"></div>
                    <div className="animation animation-2"></div>
                    <div className="animation animation-3"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="about-content-inner">
                <div className="about-title">
                  <h4>
                    Your multilingual resource for subject terminology and
                    educational tools
                  </h4>
                  <h2>
                    Eastern Cape Education <span> - Glossary & Learning Hub</span>
                  </h2>
                </div>

                <div className="about-text">
                  <p>
                    This is your essential source for multilingual educational
                    resources, developed by the Eastern Cape Department of
                    Education.
                  </p>
                  <p>
                    Easily search thousands of subject-specific terms and access
                    valuable tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO POPUP */}
      {open && (
        <div className="video-modal-content no-bg">
          <span className="close-btn" onClick={() => setOpen(false)}>
            &times;
          </span>

          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/2cTVtjzk9Ec?autoplay=1"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
};

export default About;
