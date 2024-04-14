
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { skills } from "../data/data";

export const Skills = () => {
  

  return (
    <section className="skill" id="skills">
      <div className="">
        <div className="">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Here are some of my skils on which I have been working on for the past 2 years</p>
              {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel> */}
              <div className="skills-section">

                {skills.map((skill, index) => (
                  <div className="skillbox" key={index}>
                    <div className="skill-title">{skill.title}</div>
                    <div className="skill-list">
                      {skill.skills.map((item, index) => (
                        <div className="skill-item" key={index}>
                          <img src={item.image} className="skill-image" alt='skill-logo'/>
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="back-img" />
    </section>
  )
}
