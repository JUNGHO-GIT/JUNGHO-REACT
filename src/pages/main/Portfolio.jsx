import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Isotope from "isotope-layout";
import {Tooltip} from "react-tooltip";
import {Icons} from "../../components/common/Icons";

// ------------------------------------------------------------------------------------------------>
const Portfolio = () => {
  const [images, setImages] = useState([]);

  // ---------------------------------------------------------------------------------------------->
  useEffect(() => {
    const loadImages = async () => {
      let loadedImages = [];
      for (let j = 1; j <= 5; j++) {
        const image = await import(`../../assets/images/project/project${j}/1.png`);
        loadedImages.push(image.default);
      }
      setImages(loadedImages);
    };
    loadImages();
  }, []);
  const itemsArray = {
    title: ["Portfolios"],
    items: [
      {
        id: "1",
        filter: "filter-front",
        imgSrc: 0,
        title: "JREACT",
        desc: "Portfolio React",
        icon: "SiReact",
        color: "#61DAFB",
      },
      {
        id: "2",
        filter: "filter-etc",
        imgSrc: 1,
        title: "JLINT",
        desc: "Vscode Language Formatter Extension",
        icon: "FaNodeJs",
        color: "#339933",
      },
      {
        id: "3",
        filter: "filter-back",
        imgSrc: 2,
        title: "JUNGHQLO",
        desc: "Online Clothing Shopping Store",
        icon: "SiSpringboot",
        color: "#6DC73F",
      },
      {
        id: "4",
        filter: "filter-back",
        imgSrc: 3,
        title: "GoodNeighbor",
        desc: "Charity and Donation Website",
        icon: "SiSpring",
        color: "#6DC73F",
      },
      {
        id: "5",
        filter: "filter-back",
        imgSrc: 4,
        title: "MeatStore",
        desc: "Online Meat Shopping Store",
        icon: "FaJava",
        color: "#E51F24",
      },
    ],
  };

  // ---------------------------------------------------------------------------------------------->
  useEffect(() => {
    const portfolioContainer = document.querySelector(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });
      let portfolioFilters = document.querySelectorAll("#portfolio-filters li");
      let allFilter = document.querySelector("#portfolio-filters li[data-filter=" * "]");
      portfolioFilters.forEach(function  (el, index)  {
        el.addEventListener("click", function  (e)  {
          e.preventDefault();
          portfolioFilters.forEach(function  (el)  {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");
          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
        });
        if (index === 0) {
          el.classList.add("filter-active");
          portfolioIsotope.arrange({
            filter: el.getAttribute("data-filter"),
          });
        }
        if (allFilter) {
          allFilter.classList.add("filter-active");
          portfolioIsotope.arrange({
            filter: allFilter.getAttribute("data-filter"),
          });
        }
      });
    }
  }, []);


  // ---------------------------------------------------------------------------------------------->
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>{itemsArray.title}</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filters">
              <li data-filter="*">All</li>
              <li data-filter=".filter-back">1</li>
              <li data-filter=".filter-front">2</li>
              <li data-filter=".filter-etc">3</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          {itemsArray.items.map((item) => (
            <div key={item.id} className={`col-lg-4 col-md-4 col-sm-4 col-xs-12 col-12 portfolio-item ${item.filter}`}>
              <div className="portfolio-wrap">
                <div className="image-container">
                  <img src={images[item.imgSrc]} className="img-fluid" alt={item.title} />
                  <span className="overlay-icon">
                    <Icons icon={item.icon} />
                  </span>
                </div>
                <div className="portfolio-links" data-tooltip-id={item.id}>
                  <Tooltip id={item.id} place="top" effect="float">
                    <h5 style={{color: item.color}}>{item.title}</h5>
                    <p>{item.desc}</p>
                  </Tooltip>
                  <Link to={`/details/project${item.id}`} title="More Details">
                    <i className="bx bx-search-alt-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
