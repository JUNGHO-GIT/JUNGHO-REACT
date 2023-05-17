import React, {useEffect, useRef} from "react";
import Typed from "typed.js";
import "../../core/App.css";

// ------------------------------------------------------------------------------------------------>
const Hero = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  // ---------------------------------------------------------------------------------------------->
  const itemsArray = [
    "Java, Spring, Javascript, React, Jsp, Css, Html, Sass, Bootstrap, Sql, Hibernate, Maven"
  ];

  // ---------------------------------------------------------------------------------------------->
  useEffect(() => {
    const typed = typedRef.current;
    if (typed) {
      let typedStrings = typed.getAttribute("data-typed-items");
      typedStrings = typedStrings.split(",");
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }

      typedInstance.current = new Typed(typed, {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        cursorChar: "|",
      });
    }
    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  // ---------------------------------------------------------------------------------------------->
  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-left">
      <div className="hero-container" data-aos="fade-in">
        <h1>JUNGHO MUN</h1>
        <p>
          <span ref={typedRef} className="typed" data-typed-items={itemsArray}></span>
        </p>
      </div>
    </section>
  );
};
export default Hero;