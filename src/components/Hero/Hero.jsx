import "./Hero.css"
import Button from "../Button/Button.jsx"
import BottomLeft from "../../assets/icons/bottom-left.svg?react";
import TopRight from "../../assets/icons/top-right.svg?react";
import LeftButton from "../../assets/icons/left-button.svg?react";
import RightButton from "../../assets/icons/right-button.svg?react";

export default function Hero(){

    return(
        <main className="main-hero">
            <div className="wrapper">
                <div className="text-container">
                    <BottomLeft className="bottom svg" />
                    <TopRight className="top svg" />
                    <p className="Hero__message">Achieving Your Dreams <br /> Through <span className="eductaion">Education</span></p>
                    <p className="Hero__description">We are experienced in educationl platform and skilled strategies <br /> for the success of our online learning.</p>
                    <Button title="Discover More" varient="secondary" />

                    
                    <div className="left swipper-button">
                        <LeftButton />
                    </div>
                    <div className="right swipper-button">
                        <RightButton />
                    </div>
                </div>
            </div>

        </main>
    );
}