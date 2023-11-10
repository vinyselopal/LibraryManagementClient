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
        <div className="p-3 w-full">
            <h1 className="p-3 border-b-2">Search Books</h1>
            <div>
                <div className="p-3 w-1/4 min-w-min">
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <div className="flex flex-row p-3 justify-between space-x-4">
                            <label name='author'>Author</label>
                            <input type="text" name='author' className="border-b-2"  defaultValue={formData.author} onChange={handleChange} id='author'/>
                        </div>
                        <div className="flex flex-row p-3 justify-between space-x-4">
                            <label name='title'>Title</label>
                            <input type="text" name='title' className="border-b-2"  defaultValue={formData.title} onChange={handleChange} id='title'/>
                        </div>
                        <div className="p-3">
                            <button type='submit' className="bg-blue-500 p-2 rounded-sm text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <List records={books} />
        </div>
    )
}

export default SearchBooks
