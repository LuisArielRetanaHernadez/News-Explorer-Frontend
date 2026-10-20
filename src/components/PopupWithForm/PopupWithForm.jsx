import './PopupWithForm.css'

import CloseIcon from "../../images/back.svg"

import { useEffect, useRef } from 'react'

/*

example form for popup modal

<form className='popup-with-form__form '>
    <fieldset className='popup-with-form__fieldset'>
        <div className='popup-with-form__field'>
            <label className='popup-with-form__label' htmlFor='login-email'>Correo electronico</label>
            <input
                className='popup-with-form__input'
                id='login-email'
                name='email'
                type='email'
                autoComplete='email'
                placeholder='Introduce tu correo electronico'
                required
            />
        </div>
        <div className='popup-with-form__field'>
            <label className='popup-with-form__label' htmlFor='login-password'>Contraseña</label>
            <input
                className='popup-with-form__input'
                id='login-password'
                name='password'
                type='password'
                autoComplete='current-password'
                placeholder='Introduce tu contraseña'
                required
            />
        </div>
    </fieldset>
    <button className='popup-with-form__button-submit popup-with-form__button-submit--active' type='submit'>Iniciar sesion</button>
    
    <p className='popup-with-form__option-redirection'>
        o <button className='popup-with-form__button-direction-register' type='button'>Inscribirse</button>
    </p> 
    
</form>

*/ 

const PopupWithForm = (props) => {
    const modalRef = useRef()

    const onClosePopup = (e) => {
        props.setIsOpen(false)
    }

    useEffect(() => {
        if (!modalRef.current) return

        const onOutClickModal = e => {
            if (!modalRef.current.contains(e.target)) onClosePopup()
        }
        const onKeyEscClosePopup = e => {
            if (e.key === 'Escape') onClosePopup()
        }
        
        props.isOpen && document.addEventListener('mousedown', onOutClickModal) 
        props.isOpen && document.addEventListener('keydown', onKeyEscClosePopup)

        return () => {
            document.removeEventListener('mousedown', onOutClickModal)
            document.addEventListener('keydown', onKeyEscClosePopup)
        }
    },[modalRef, props.isOpen])

    return (
        <section 
            className={`popup-with-form popup-with-form--centered ${props.isOpen ? 'popup-with-form--open' : 'popup-with-form--close'}`}
            
        >
            <div
                className='popup-with-form__modal'
                role='dialog'
                aria-modal='true'
                aria-labelledby='login-title'

                ref={modalRef} 
            >
                <button className='popup-with-form__close-button' type='button' aria-label='Cerrar modal'
                onClick={e => props.setIsOpen(false)}
                >
                    <img className='popup-with-form__close-icon' src={CloseIcon} alt='' />
                </button>
                <h2 className='popup-with-form__title' id='login-title'>Login</h2>
                {/* aqui va el contendio del componete/prop children */}
                {props.children}
            </div>
        </section>
    )
}

export default PopupWithForm
