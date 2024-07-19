import {
    EuiCard,
    EuiFlexGroup,
    EuiFlexItem,
    EuiPage,
    EuiPageBody,
    EuiText
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import Slider, { Settings } from 'react-slick';
import { TypeAnimation } from 'react-type-animation';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './TestimonialPage.css';

const testimonials = [
    {
        imgSrc: '/woman.png',
        name: 'Johnathan',
        designation: 'CEO, Microsoft',
        review: 'This is a fantastic service! Highly recommend.',
        rating: 5,
    },
    {
        imgSrc: '/woman.png',
        name: 'San Marley',
        designation: 'CTO, Apple',
        review: 'Exceptional quality and great support.',
        rating: 4,
    },
];

const settings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
};

const TestimonialPage = () => (
    <EuiPage style={{ backgroundColor: 'transparent', overflow: 'hidden' }}>
        <EuiPageBody>
            <div>
                <h1 style={{ textAlign: 'center' }}>
                    <TypeAnimation
                        cursor={true}
                        sequence={[
                            'Hear What Our Happy Clients Are Saying!',
                            2000,
                            'Client Success Stories..',
                            2000,
                            'Why Clients Love Working with Us',
                            2000
                        ]}
                        wrapper="span"
                        speed={80}
                        repeat={Infinity}
                    />
                </h1>
            </div>
            <div className="testimonial-slider">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card-wrapper">
                            <EuiCard
                                textAlign="left"
                                title=""
                                description=""
                                className="testimonial-card"
                                style={{ backgroundColor: 'transparent' }}
                            >
                                <EuiFlexGroup>
                                    <EuiFlexItem grow={true} >
                                        <div className='pic-mark'></div>
                                        <img src={testimonial.imgSrc} alt={testimonial.name} className="testimonial-image" />
                                    </EuiFlexItem>
                                    <EuiFlexItem>
                                        <EuiText color="ghost">
                                            <h3>{testimonial.name}</h3>
                                            <p>{testimonial.designation}</p>
                                            <p>{testimonial.review}</p>
                                            <div className="testimonial-rating">
                                                {'★'.repeat(testimonial.rating)}
                                                {'☆'.repeat(5 - testimonial.rating)}
                                            </div>
                                        </EuiText>
                                    </EuiFlexItem>
                                </EuiFlexGroup>
                            </EuiCard>
                        </div>
                    ))}
                </Slider>
            </div>
        </EuiPageBody>
    </EuiPage>
);

export default TestimonialPage;
