import React, { useEffect, useState } from "react";
import "../components/testimonial.css";

const TestiMomial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // An array of your carousel items
  const carouselItems = [
    {
      title: "Adding text to your website",
      content: "One of the first steps in creating a website is adding text...",
    },
    {
      title: "Website.com Text too",
      content: "Text is added via drag-and-drop. This means, once you have...",
    },
    {
      title: "Editing text on your web page",
      content: "Using the text editor, you can make changes to the style, alignment...",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 1900);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonial">
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* ... Rest of your code */}
      <div className="carousel-inner">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        onClick={prevSlide}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        onClick={nextSlide}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </section>
  );
};

export default TestiMomial;




// import React from "react";
// import '../components/testimonial.css'

// let TestiMomial = () => {
//     return (
//         <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
//             <div class="carousel-indicators">
//                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//             </div>
//             <div className="carousel-inner">
//                 <div className="head mx-auto text-blue">
//                     <h3>Sayed Abu Hasan</h3>
//                     <p>As such, you may Mutilities or custom styles.</p>
//                 </div>
//                 <div className="carousel-item active">
//                     <h3>Adding text to your website</h3>
//                     <p>One of the first steps in creating a website is adding text. All of Website.coms templates are pre-populated with sample content, including text. The sample content is intended to give you a head start by showing you the content you can have, and a possible way to arrange them on your web page.</p>
//                 </div>
//                 <div className="carousel-item">
//                     <h3>Website.com Text too</h3>
//                     <p>Text is added via drag-and-drop. This means, once you have click on the add text button, a placeholder textbox will be added to your web page. You can drag the textbox to the desired location and then edit the text as you wish.</p>
//                 </div>
//                 <div className="carousel-item">
//                     <h3>Editing text on your web page</h3>
//                     <p>Using the text editor, you can make changes to the style, alignment, size, color, character and line spacing, and you can add links, dividers and tables into the textbox area. </p>
//                 </div>
//             </div>
//             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Previous</span>
//             </button>
//             <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span class="visually-hidden">Next</span>
//             </button>
//         </div>


//     )
// }

// export default TestiMomial
