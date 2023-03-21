import './ImgSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import badging from '../../Images/hotstar_imges/slider-badging.jpg';
import scale from '../../Images/hotstar_imges/slider-scale.jpg';
import badog from '../../Images/hotstar_imges/slider-badag.jpg';
import scales from '../../Images/hotstar_imges/slider-scales.jpg';
const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <>
            <Slider className='carousel-img' {...settings} >
                <div className="wrap">
                    <a href="#/">
                         <img src={badging} alt="" />
                    </a>
                </div> 
                <div className="wrap">
                    <a href="#/">
                         <img src={scale} alt="" />
                    </a>
                </div> 
                <div className="wrap">
                    <a href="#/">
                         <img src={badog} alt="" />
                    </a>
                </div> 
                <div className="wrap">
                    <a href="#/">
                         <img src={scales} alt="" />
                    </a>
                </div> 
                  
            </Slider>
        </>
    )
}

export default ImgSlider;