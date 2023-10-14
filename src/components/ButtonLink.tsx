import { Link } from "react-router-dom";

const ButtonLink = (props: {text:string; to: string}) => {
    return (
        <>
            <Link to={props.to} className="btn hover-button">
                <div className="btn-text">
                    {props.text}
                </div>
            </Link>
        </>
    )
}

export default ButtonLink