import './PopupLoginForm.css'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import { create } from 'zustand'


export const usePopupLoginForm = create(set => ({
    isOpen: false,
    toggleOpen: () => set(state => ({isOpen: !state.isOpen}))
}))


const PopupLoginForm = () => {


    const isOpen = usePopupLoginForm(state => state.isOpen)
    const toggleIsOpen = usePopupLoginForm(state => state.toggleOpen)

    const FormLogin = (
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
    )

    return (
        <PopupWithForm 
            isOpen={isOpen}
            setIsOpen={toggleIsOpen}
        >
            { FormLogin }
        </PopupWithForm>
    )
}


export default PopupLoginForm
