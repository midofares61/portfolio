import "./portofolio.css";
import {Swiper , SwiperSlide} from "swiper/react";
import "swiper/css"
import slide_1 from "../../img/sidebar.png";
import slide_2 from "../../img/ecommerce.png";
import slide_3 from "../../img/hoc.png";
import slide_4 from "../../img/musicapp.png";
import { useContext } from "react";
import { themeContext } from "../../Context";
function Portofolio(){
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <>
            <div className="Portofolio" id="Portofolio">
                <div className="container">
                <span style={{ color: darkMode ? "white" : "" }}>Recent Project</span>
                <span>Portofolio</span>
                <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="Portfolio-slider"
                >
                    <SwiperSlide>
                        <a href="https://midofares61.github.io/netflix/"><img src={slide_1} alt="" /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://obsups-2.netlify.app/"><img src={slide_2} alt="" /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://midofares61.github.io/Mizo/"><img src={slide_4} alt="" /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://midofares61.github.io/casper/"><img src={slide_3} alt="" /></a>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </>
    )
}
export default Portofolio;