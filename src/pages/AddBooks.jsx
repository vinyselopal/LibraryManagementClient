import {useState, useEffect} from "react"
import {importBooks} from '../apis'
import List from "../components/List"

const AddBooks = () => {
    const [formData, setFormData] = useState({author: '', title: '', quantity: 0})
    const [books, setBooks] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await importBooks(formData)
        setBooks(response)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((preFormData) => ({...preFormData, [name]: value}))
    }

    useEffect(() => {
        console.log(books)
    }, [books])

    return (
        <div>
            <h1>Add Books</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label name='author'>Author</label>
                    <input type="text" defaultValue={formData.author} onChange={handleChange} name='author'/>
                    <label name='title'>Title</label>
                    <input type="text" defaultValue={formData.title} onChange={handleChange} name='title'/>
                    <label name='quantity'>Quantity</label>
                    <input type="number" defaultValue={formData.quantity} onChange={handleChange} name='quantity'/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <List records={books}/>
        </div>
    )
}

export default AddBooks
