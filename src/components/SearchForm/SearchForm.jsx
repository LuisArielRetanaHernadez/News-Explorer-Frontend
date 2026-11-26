import { useState } from 'react';
import './SearchForm.css';


const SearchForm = ({handleSearch}) => {
    const [searchIput, setSeachInput] = useState('')

    return (
        <form className="search-form search-form--hero" onSubmit={ e => {
            e.preventDefault()
            handleSearch(searchIput)
        }}>
            <div className="search-form__field-search">
                <input
                    onChange={e => setSeachInput(e.target.value)} 
                    className="search-form__input search-form__input--search" type="text" placeholder="Buscar noticias..." />
                <button className="search-form__button search-form__button--search" type="search">Buscar</button>
            </div>
        </form>
    )
}

export default SearchForm
