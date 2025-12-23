import "./sectionTitle.css"

export default function sectionTitle (props) {
    return (
        <section  className="section-title">
            <p>{props.sectionTitle}</p>
        </section>
    );
}