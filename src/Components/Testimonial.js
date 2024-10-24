import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Testimonial</p>
                <h1 className="primary-heading">What They Are Saying</h1>
                <p className="primary-text">
                    They highlight real-life benefits and satisfaction, providing authentic feedback that helps others make informed decisions.
                    Here’s what people are saying about their experiences and the positive impact they've noticed.
                </p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="" />
                <p>
                    Absolutely amazing experience! The food was top-notch, bursting with flavor, and the service was impeccable.
                    The ambiance made for a perfect dining atmosphere. Highly recommend this restaurant for anyone looking to enjoy a memorable meal. Five stars!
                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Nguyên Linh</h2>
            </div>
        </div>
    );
};

export default Testimonial;