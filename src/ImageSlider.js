import { useEffect, useState } from "react";
import {data} from "./Constants";

const ImageSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length); //1,2,3,4,0
  };
  const handlePreClick = () => {
    // setActiveImageIndex(!activeImageIndex ? data.length -1 : activeImageIndex - 1);     //Same as line no.16

    // if (activeImageIndex === 0) setActiveImageIndex(data.length - 1);                  // This if else is also same as line no.16
    // else setActiveImageIndex(activeImageIndex - 1);

    setActiveImageIndex(activeImageIndex === 0 ? data.length - 1 : activeImageIndex - 1);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <div className="mt-4 slider-main">
      <button className="btn" onClick={handlePreClick}>
        Previous
      </button>
      {data.map((url, i) => (
        <img
          key={i}
          src={url}
          alt="img"
          className={
            "rounded-lg w-[500px] h-[400px] object-contain " +
            (activeImageIndex === i ? "block" : "hidden")
          }
        />
      ))}

      <button className="btn" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
