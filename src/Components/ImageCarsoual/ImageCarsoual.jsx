import React, {useState} from "react";
import "../ImageCarsoual/ImageCarsoual.css";

const ImageCarsoual = ({images}) => {



    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };



    return (
        <div className="carousel-container">
            <button className="carousel-button prev" onClick={handlePrev}>
                Prev
            </button>
            <div className="carousel-slide">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`}/>
            </div>
            <button className="carousel-button next" onClick={handleNext}>
                Next
            </button>
        </div>
    )
}
export default ImageCarsoual;