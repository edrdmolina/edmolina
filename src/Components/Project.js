// Styles
import '../Styles/Project.css';

function Project(props) {
    // Destructure props
    const { name, description, appUrl, githubUrl, image } = props;

    return (
        <div className='Project'>
            <img className='Project-image' src={image} alt={name}/>
            <div className='Project-content'>
                <div className='Project-title'>
                    <h4>{name}</h4>
                    <div className='Project-links'>
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                        <a href={appUrl} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-external-link-alt fa-2x"></i>
                        </a>
                    </div>
                </div>
                <div className='Project-description'>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Project