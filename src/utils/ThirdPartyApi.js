const API_KEY = import.meta.env.API_KEY

class Api {
    constructor(options) {
        this._urlApi = options.urlApi;
        this._header = options.header;
    }

    setToken (token) {
        if (token) {
            delete this._header.Authorization 
        } else {
            this._header.Authorization = `Bearer ${token}`;            
        }
    }

    async getSearchCardsNews (parametres) {
        const params = new URLSearchParams({
            q: parametres.q,
            from: parametres.from || new Date(new Date().setDate(new Date().getDate() - 7)).toLocaleDateString('en-CA'),
            to: parametres.to || new Date().toLocaleDateString('en-CA'),
            sortBy: parametres.sortBy || "popularity",
            pageSize: parametres.pageSize || 20,
        })


        const response = await fetch(`${this._urlApi}/everything?${params}`, {
            method: 'GET',
            headers: this._header,
            
        })

        return response.json()
    }
}

export const api = new Api({
    urlApi: 'https://newsapi.org/v2',
    header: {
        "Authorization": `Bearer ${''}` || '',
        "X-Api-Key": `${API_KEY}` || '',
    }
})
