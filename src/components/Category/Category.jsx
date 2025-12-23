import "./Category.css"
import SectionHeading from "../SectionHeading/SectionHeading";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import WebDesign from "../../assets/images/web-design.svg?react";
import GraphicsDesign from "../../assets/images/graphics.svg?react";
import VideoEditor from "../../assets/images/video.svg?react";
import ContentWriting from "../../assets/images/content.svg?react";
import Marketing from "../../assets/images/marketing.svg?react";
import Forword from "../../assets/icons/forword.svg?react"
import Button from "../Button/Button.jsx"

export default function Category () {

    return(
        <section className="category">
            <div className="wrapper">

                <SectionHeading sectionheading="Category"/>
                <div className="category-heading">
                    <SectionTitle sectionTitle="Favorite Topics To Learn" />
                    <Forword className="forword" />
                    <Button title="Browse edunity Courses" />
                </div>

                <div className="category-body">

                    <div className="category-card">
                        <WebDesign width={100} className="category-card__img" />
                        <div className="cartegory-card__text">
                            <a className="course-name"> Web Design</a>
                            <p className="course-number"> 08 Courses</p>
                        </div>
                    </div>
                    

                    <div className="category-card">
                        <GraphicsDesign width={100} className="category-card__img" />
                        <div className="cartegory-card__text">
                            <a className="course-name"> Graphics Design</a>
                            <p className="course-number"> 15 Courses</p>
                        </div>
                    </div>
                    

                    <div className="category-card">
                        <VideoEditor width={100} className="category-card__img" />
                        <div className="cartegory-card__text">
                            <a className="course-name"> Video Editor</a>
                            <p className="course-number"> 10 Courses</p>
                        </div>
                    </div>
                    

                    <div className="category-card">
                        <ContentWriting width={100} className="category-card__img" />
                        <div className="cartegory-card__text">
                            <a className="course-name"> Content Writing</a>
                            <p className="course-number"> 07 Courses</p>
                        </div>
                    </div>
                    

                    <div className="category-card">
                        <Marketing width={100} className="category-card__img" />
                        <div className="cartegory-card__text">
                            <a className="course-name"> Marketing</a>
                            <p className="course-number"> 15 Courses</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </section>
    );
}