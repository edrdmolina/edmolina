// Styles
import '../Styles/Photo.css'

function FilmPhoto(props) {
    const { name, location, camera, filmStock, image } = props;

    const openPhoto = () => window.open(image)
    return (
        <div className='Photo'>
            <img src={image} alt={name} onClick={openPhoto} />
            <div className='Content'>
                <h2>{name}</h2>
                <div className='Data'>
                    <span>Location: {location}</span>
                    <span>Camera: {camera}</span>
                    <span>Film Stock: {filmStock}</span>
                </div>
            </div>
        </div>
    )
}

export default FilmPhoto;