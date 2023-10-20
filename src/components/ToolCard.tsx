import { Link } from 'react-router-dom';

import '../styles/index.css';

const ToolCard = (props: { icon: string; name: string; description: string; }) => {
    const { icon, name, description } = props;
    return (
        <>
            <Link to="/processing-image">
                <div className="toolcard">
                    <img
                        className="relative"
                        alt="OCR Image"
                        src={icon}
                    />

                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </Link>
        </>
    )
}

export default ToolCard