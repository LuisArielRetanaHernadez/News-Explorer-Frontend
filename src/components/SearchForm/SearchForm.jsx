import './SearchForm.css';


const SearchForm = () => {
    return (
        <form className="search-form search-form--hero">
            <div className="search-form__field-search">
                <input className="search-form__input search-form__input--search" type="text" placeholder="Buscar noticias..." />
                <button className="search-form__button search-form__button--search" type="search">Buscar</button>
            </div>
        </form>
    )
}

export default SearchForm
