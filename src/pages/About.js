import React from "react";
import "../app/App.css";

const About = () => {
  const elements = {
    firstDescription: [
      "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex"
    ],
    roleTitle: [
      "UI/UX Designer & Web Developer."
    ],
    roleDescription: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ],
    section: [
      {
        sectionTitle: "birthday",
        sectionValue: "1 May 1995"
      },
      {
        sectionTitle: "Website",
        sectionValue: "www.example.com"
      },
      {
        sectionTitle: "Phone",
        sectionValue: "+123 456 7890"
      },
      {
        sectionTitle: "City",
        sectionValue: "New York, USA"
      },
      {
        sectionTitle: "Age",
        sectionValue: "30"
      },
      {
        sectionTitle: "Degree",
        sectionValue: "Master"
      }
    ],
    lastDescription: [
      "Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore."
    ]
  };

  return (
    <section id="about" className="about section-bg">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>{elements.firstDescription}</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="/images/profile.jpg" className="img-fluid" alt="Profile" width="380px" height="450px" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{elements.roleTitle}</h3>
            <p className="fst-italic">{elements.roleDescription}</p>
            <div className="row">
              {elements.section.map((sectionItem, index) => (
                <div className="col-lg-6" key={index}>
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>{sectionItem.sectionTitle}</strong>
                      <span>{sectionItem.sectionValue}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <p>{elements.lastDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
