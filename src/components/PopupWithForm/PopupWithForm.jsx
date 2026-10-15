import './PopupWithForm.css'

import CloseIcon from "../../images/back.svg"


const FormLogin = () => {
    return (
        <div className=''>
            <form>
                <fieldset>
                    <div>
                        <label>Correo electronico</label>
                        <input placeholder='Introduce tu correo electronico' />
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input placeholder='Introduce tu contraseña' />
                    </div>
                </fieldset>
            </form>
        </div>
    )
}


const PopupWithForm = ({}) => {

    return (
        <section className='popup-form popup-form--center-medium-content'>
            <div className='popup-form__modal'>
                <span className='popup-form__button-close'>
                    <img src={CloseIcon} />
                </span>
                <h2 className='popup-form__title'>Modal</h2>
                <div className='popup-form__content'>
                    <p>Formulario probado, en contenido</p>
                </div>
            </div>   
        </section>
    )
}

export default PopupWithForm
