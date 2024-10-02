import React, { useState } from 'react';
import "./VideoCarsouel.css"

const VideoCarousel = ({ videos }) => {
    const [currentIndex, setCurrentIndex] = useState(0); // Track current video index

    // Function to go to the next video
    const nextVideo= () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    // Function to go to the previous video
    const prevVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };

    return (
        <div className="video-carousel">

            <video className="carousel-video" key={currentIndex} autoPlay muted loop>
                <source src={videos[currentIndex]} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Navigation buttons */}
            <button className="prev-button" onClick={prevVideo}>❮</button>
            <button className="next-button" onClick={nextVideo}>❯</button>
        </div>
    );
};

export default VideoCarousel;
