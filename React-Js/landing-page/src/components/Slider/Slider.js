import React from "react";
import "./Slider.css";
import mac from "../../media/mac.jpg";
import macbook from "../../media/macbook.jpg";
import imac from "../../media/imac-macbook.jpg";
import { Carousel } from "react-bootstrap";

const Slider = () => {
	return (
		<div>
			<Carousel fade>
				<Carousel.Item className="slider-img">
					<img className="d-flex w-100" src={mac} alt="First slide" />
					<Carousel.Caption className="slider-caption">
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={macbook} alt="Second slide" />

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={imac} alt="Third slide" />

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Slider;
