import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import SamplePrevArrow from "./PrevArrow";
import SampleNextArrow from "./NextArrow";

interface Testimonial {
    avatar: string;
    fullName: string;
    testimonial: string;
}

export default class Responsive extends Component {
  state = {
    testimonials: [] as Testimonial[],
  };

  async componentDidMount() {
    try {
      const response = await fetch('https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/testimonial');
      const data = await response.json();
      this.setState({ testimonials: data });
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    const { testimonials } = this.state;

    return (
      <div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    );
  }
}
