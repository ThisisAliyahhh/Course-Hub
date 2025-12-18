
export default function Button(props){
    return(
        <button>
            <span>{props.title}</span> <span>{props.icon}</span>
        </button>
    );
}