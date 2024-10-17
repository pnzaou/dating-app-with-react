import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import './css/Home-page-footer'

const SliderComponent = () => {

    return (
        <Swiper
          slidesPerView={1}
          spaceBetween={70}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
            <SwiperSlide>
                <div className="flex flex-col items-center mt-14">
                    <div className="carousel-item" style={{
                        width: 300,
                        height: 360
                    }}>
                        <img
                        src="img/photo_2024-10-15_13-39-55_1.webp"
                        className="rounded-box" />
                    </div>
                    <div className="text-center mt-10 mb-12 px-10">
                        <h1 style={{
                            fontWeight: "bold",
                            color: "#E94057",
                            fontSize: 24,
                            marginBottom: 15
                        }}>Séduction</h1>
                        <p>
                            Les conversations deviennent des jeux de mots subtils, où chaque échange est une danse intime pour capter l&apos;attention, éveiller les sens, et dévoiler lentement ses intentions.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col items-center mt-14">
                    <div className="carousel-item" style={{
                        width: 300,
                        height: 360
                    }}>
                        <img
                        src="img/photo_2024-10-15_13-39-54_1.webp"
                        className="rounded-box" />
                    </div>
                    <div className="text-center mt-10 mb-12 px-10">
                        <h1 style={{
                            fontWeight: "bold",
                            color: "#E94057",
                            fontSize: 24,
                            marginBottom: 15
                        }}>Connexion</h1>
                        <p>
                            Un moment suspendu dans le temps où deux âmes s&apos;effleurent. L&apos;échange d&apos;émotions, de désirs inavoués, et de regards profonds crée une alchimie irrésistible, comme un souffle partagé.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col items-center mt-14">
                    <div className="carousel-item" style={{
                        width: 300,
                        height: 360
                    }}>
                        <img
                        src="img/photo_2024-10-15_13-39-55-_2__1.webp"
                        className="rounded-box" />
                    </div>
                    <div className="text-center mt-10 mb-12 px-10">
                        <h1 style={{
                            fontWeight: "bold",
                            color: "#E94057",
                            fontSize: 24,
                            marginBottom: 15
                        }}>Interaction</h1>
                        <p>
                            Interagissez via des messages, facilitant les conversations et la découverte mutuelle. Ces échanges sont essentiels pour évaluer la compatibilité.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default SliderComponent;
