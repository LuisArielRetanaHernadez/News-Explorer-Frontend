import './Preloader.css'

import Ellipsis from '../../images/Ellipse.svg'


const Preloader = () => {
    return (
        <div className="preloader">
            <figure className="preloader__figure">
                <img className="preloader__image" src={Ellipsis} alt="preloader" />
            </figure>
            <p className="preloader__text">buscando noticias...</p>
        </div>
    )
}

export default Preloader
