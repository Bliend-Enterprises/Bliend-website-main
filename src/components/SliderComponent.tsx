import { EuiImage } from '@elastic/eui';
import { FunctionComponent } from 'react';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './SliderComponent.css'


const CustomNextArrow = (props: any) => {
  const { className, style, onClick,hasBlackIcon } = props;
  return (
    <EuiImage
      className={className}
      style={{
        ...style, display: "block", width: '40px', height: 'auto',
      }}
      src={!hasBlackIcon ?"/icons/RIGHT SCROLL BUTTON.png":"/icons/RIGHT ICON BLACK.png"}
      alt="right"
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props: any) => {
  const { className, style, onClick,hasBlackIcon } = props;
  return (
    <EuiImage
      className={className}
      style={{
        ...style, display: "block", width: '40px', height: 'auto',
        zIndex: 2
      }}
      src={!hasBlackIcon ?"/icons/LEFT SCROLL BUTTON.png":"/icons/LEFT ICON BLACK.png"}
      alt="left"
      onClick={onClick}
    />
  );
};

export interface SliderComponentProps {
  autoplay: boolean,
  needBlackIcon:boolean
}

const SliderComponent: FunctionComponent<SliderComponentProps> = ({
  autoplay,
  needBlackIcon
}) => {
  const adImages = [
    { id: 1, src: `/Advertisement.webp`, alt: 'Image 1', title: 'Advertisement' },
    { id: 2, src: `/Marketing-web.png`, alt: 'Image 2', title: 'Marketing' },
    { id: 3, src: `/web-solutions.webp`, alt: 'Image 3', title: 'Software Solutions' },
    // { id: 4, src: `/webp-outdoor/OUTDOOR DISPLAY TWO.webp`, alt: 'Image 4', title: 'Outdoor' },
    // { id: 5, src: `/webp-outdoor/STANDINGS.webp`, alt: 'Image 5', title: 'Outdoor' },
    // { id: 6, src: `/webp-print/MAGAZINE ONE.webp`, alt: 'Image 6', title: 'Print' },
    // { id: 7, src: `/webp-print/MAGAZINE TWO.webp`, alt: 'Image 7', title: 'Print' },
    // { id: 8, src: `/webp-television/TELEVISION ADS.webp`, alt: 'Image 8', title: 'Television' },
  ]

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay,
    autoplaySpeed: 2200,
    lazyLoad: 'ondemand',
    adaptiveHeight: true,
    nextArrow: <CustomNextArrow hasBlackIcon={needBlackIcon}/>,
    prevArrow: <CustomPrevArrow hasBlackIcon={needBlackIcon}/>
  };

  return (
    <div className='slider-wrapper'>
      <Slider {...settings}>
        {adImages.map(image => (
          <div className="slider-image-container" key={image.src}>
            <img className="slider-image" src={image.src} alt={image.alt}
              loading='lazy'
            />
            <h1 style={{ textAlign: 'center' }}><strong>{image.title}</strong></h1>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;
