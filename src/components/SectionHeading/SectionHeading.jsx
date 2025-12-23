import "./SectionHeading.css"
import HeadingIcon from "../../assets/icons/heading-icon.svg?react";


export default function SectionHeading (props){

    let color = "--primary-button-bg";
        
        if (props.varient === "secondary"){
            color = "--secondary-button-bg";
        }

    return(
        <section className="section-heading" style={{color: `var(${color})`}} >
            <HeadingIcon />
            <p>{props.sectionheading} </p>
        </section>
    );
}