    import { EuiImage } from '@elastic/eui';
    import { FunctionComponent } from 'react';
    import Slider, { Settings } from 'react-slick';
    import "slick-carousel/slick/slick-theme.css";
    import "slick-carousel/slick/slick.css";
    import './SliderWeb.css'


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

    export interface SliderWebProps {
    autoplay: boolean,
    needBlackIcon:boolean
    }

    const SliderWeb: FunctionComponent<SliderWebProps> = ({
    autoplay,
    needBlackIcon
    }) => {
    const adImages = [
        { id: 1, src: `/software-imgs/portfolio.png`, alt: 'Image 1', title: 'portfolio' },
        { id: 2, src: `/software-imgs/education.png`, alt: 'Image 2', title: 'education' },
        { id: 3, src: `/software-imgs/corporate.png`, alt: 'Image 3', title: 'corporate' },
        { id: 4, src: `/software-imgs/eccomerce.png`, alt: 'Image 4', title: 'eccomerce' },
        { id: 5, src: `/software-imgs/forumn.png`, alt: 'Image 5', title: 'forum' },
        { id: 6, src: `/software-imgs/broucher.png`, alt: 'Image 6', title: 'broucher' },
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

    export default SliderWeb;
