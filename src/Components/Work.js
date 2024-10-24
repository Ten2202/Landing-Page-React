import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Choosing a variety of meals ensures a balanced intake of essential nutrients, promoting overall well-being and preventing chronic diseases.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Regularly evaluating and adjusting these frequencies ensures a balanced and healthy lifestyle tailored to your needs and goals.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "By prioritizing speed, businesses can meet customer expectations, improve service efficiency, and gain a competitive edge",
        },
    ];
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-heading">How It Works</h1>
                <p className="primary-text">
                    Diet impacts health by providing essential nutrients for energy, growth, and repair. Balanced nutrition
                    supports immunity and overall well-being, while poor diets can cause deficiencies and diseases.
                    Mindful eating ensures optimal health.
                </p>
            </div>
            <div className="work-section-bottom">
                {workInfoData.map((data) => (
                    <div className="work-section-info" key={data.title}>
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;