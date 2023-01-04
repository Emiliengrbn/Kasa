import { useState } from "react"

const leftArrow = require("../assets/images/leftArrow.png");
const rightArrow = require("../assets/images/rightArrow.png");

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    if(slides.length > 1) {
        return (
            <div className="sliderStyle">
                <img src={leftArrow} className="leftArrowStyles" onClick={goToPrevious} alt="left arrow">
                </img>
                <img src={rightArrow} className="rightArrowStyles" onClick={goToNext} alt="right arrow">
                </img>
                <div className="slideStyles" style={{backgroundImage: `url(${slides[currentIndex]})`}}>
                    <div className="dotsContainerStyles">
                        <div className="dotStyle">
                            {currentIndex + 1}/{slides.length}
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="sliderStyle">
                <div className="slideStyles" style={{backgroundImage: `url(${slides[currentIndex]})`}}>
                    <div className="dotsContainerStyles">
                        <div className="dotStyle">
                            {currentIndex + 1}/{slides.length}
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}

export default ImageSlider