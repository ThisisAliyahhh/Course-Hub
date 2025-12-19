import './Button.css'

export default function Button(props){

    let backgroundColor = "--primary-button-bg";
    
    if (props.varient === "secondary"){
        backgroundColor = "--secondary-button-bg";
    }



    return(
        <button style={{backgroundColor: `var(${backgroundColor})`}}> 
            <span className='text'>{props.title}</span> 
        </button>
    );
}