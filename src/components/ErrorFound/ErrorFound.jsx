import './ErrorFound.css'


const ErrorFound = () => {
    return (
        <section className='error-found'>
            <h2 className='error-found__title'>Lo sentimos, algo ha salido mal durante la solicitud</h2>
            <p className='error-found__message'>Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde.</p>
        </section>
    )
}

export default ErrorFound
