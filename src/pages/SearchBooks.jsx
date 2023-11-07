import {useState} from "react"
import {getBooks} from '../apis'
import List from "../components/List"

const SearchBooks = () => {
    const [formData, setFormData] = useState({author: '', title: ''})
    const [books, setBooks] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await getBooks(formData)
        setBooks(response)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((preFormData) => ({...preFormData, [name]: value}))
    }

    return (
        <div className='books_form'>
            <h1>Search Books</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label name='author'>Author</label>
                    <input type="text" defaultValue={formData.author} onChange={handleChange} name='author'/>
                    <label name='title'>Title</label>
                    <input type="text" defaultValue={formData.title} onChange={handleChange} name='title'/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <List records={books} />
        </div>
    )
}

export default SearchBooks
