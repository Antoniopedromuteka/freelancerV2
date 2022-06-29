
 

import Slider from "react-slick";
import './style.css'

export function Slides({children}){

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
    return(

      
    
      <Slider {...settings}>
    
          {children}

  
      </Slider>

   
        
    )
}