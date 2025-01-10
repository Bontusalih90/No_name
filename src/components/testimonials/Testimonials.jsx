import React from 'react'
import './Testimonials.css'
import { assets } from '../../assets/assets'
import Slider from 'react-slick';
function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 2,  
            },
          },
          {
            breakpoint: 768,  
            settings: {
              slidesToShow: 1,  
            },
          },
        ],
      };
      
  return (
    <div className='testimonials-section'>
        <h3>What Our Clients Say</h3>
        
        <div className="test-card-section">
        <Slider {...settings}>
                <div className="test-card1">
                <img src={assets.app} alt="" />
                <h5>Kedir Hassen </h5>
                <p>YoursTech has been an incredible partner in driving our business forward. Their innovative solutions, attention to detail, and commitment to excellence truly set them apart. Whether it’s their cutting-edge technology or exceptional customer support, they consistently deliver beyond expectations. I highly recommend YoursTech to any company looking for reliable and forward-thinking technology services </p>

                 </div>
                
                
                <div className="test-card1">
                <img src={assets.yegnalogo} alt="" />
                <h5>Jafer Alii </h5>
                <p>YoursTech tajaajila Teekniolojii qulqullina olaanaa fi amantaa guutuu qabu kan kennuudha. Website baay’ee bareedaafi furmaata gara fuulduraa xiyyeeffannaa guddaa keessa galchuun hojjetanii yeroo muraasa keessatti nuuf laataniiru. Deeggarsa fi hojmaata isaanii hunda keessatti, hojii isaanii yeroo hundumaa baay’eenama hawwata. Yeroo Kamiyyuu YoursTech waliin hojjechuu akka filattan dhaamsa kiyya</p>

            </div>
                
            <div className="test-card1">
                <img src={assets.photog1} alt="" />
                <h5>Emaad </h5>
                <p>YoursTech ምርጥ የቴክኖሎጂ መፍትሄዎችን በማቅረብ ከፍተኛ ብቃት ያላቸው አገልግሎቶችን ይሰጣሉ። በደንብ የተሠሩ ሥራቸውና ዘመናዊ መንገዶችን በመጠቀም ለእኛ በጣም ተስፋ አሳሽ ውጤት አቀርቦልናል። ለዚህም ዘመናዊ እና ጥራተ ያላቸው ዌብሳይት በማቅረብ ሁሉንም ተጠቃሚ ደስ ያሰኛሉ። ከምንም ጥርጣሬ YoursTechን ምርጫቹ እንድሆን ታስፋ አደርግሃለሁ</p>

            </div>
           
            <div className="test-card1">
                <img src={assets.app} alt="" />
                <h5>Abdii Luuccee </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus, tempore cupiditate eum asperiores .</p>

            </div>
        
            
            </Slider>
           
            
            </div>
            </div>
  )
}

export default Testimonials