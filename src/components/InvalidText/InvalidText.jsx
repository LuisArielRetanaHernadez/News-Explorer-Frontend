import './InvalidText.css'

// Pense en crear un solo reutilizable ya que este componente tiene casi la misma
// estructura que el componente 'ErrorFound'

const InvalidText = () => {
    return (
        <section className='invalid-text'>
            <h2 className='invalid-text__title'>Texto Invalido</h2>
            <p className='invalid-text__message'>Por favor, introduzca una palabra clave</p>
        </section>
    )
}

export default InvalidText