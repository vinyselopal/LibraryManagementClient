import {useState, useEffect} from "react"
import {importBooks} from '../apis'
import List from "../components/List"
import {addBooks} from "../apis"
import Flash from "../components/Flash"

const AddBooks = () => {
    const [formData, setFormData] = useState({author: '', title: '', quantity: 0})
    const [books, setBooks] = useState([])
    const [selectedBooks, setselectedBooks] = useState([])
    const [flashMessage, setFlashMessage] = useState("")
    const [flashVisibility, setFlashVisibility] = useState(false)

    const handleFormSubmit = async (e) => {
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

    const selectButton = (record) => {
        const handleAddition = (record) => {
            if (!selectedBooks.find(item => item.id === record.id)) {
                setselectedBooks(prevselectedBooks => [...prevselectedBooks, record])
            }
        }
        return (
            <button onClick={() => handleAddition(record)} className={`record_${record.id}`}>Select</button>
        )
    }

    const handleSubmission = async () => {
        const confirmation = await addBooks(selectedBooks)
        setFlashMessage(confirmation)
        setFlashVisibility(true)
    }

    return (
        <div>
            <h1>Add Books</h1>
            {
                flashVisibility?
                <Flash message={flashMessage}/>:
                null
            }
            <div>
                <button onClick={handleSubmission}>Add selected records</button>
                <form onSubmit={handleFormSubmit}>
                    <label name='author'>Author</label>
                    <input type="text" defaultValue={formData.author} onChange={handleChange} name='author'/>
                    <label name='title'>Title</label>
                    <input type="text" defaultValue={formData.title} onChange={handleChange} name='title'/>
                    <label name='quantity'>Quantity</label>
                    <input type="number" min="1" defaultValue={formData.quantity} onChange={handleChange} name='quantity'/>
                    <button type='submit'>Import</button>
                </form>
            </div>
            <List records={books} actionButtons={selectButton}/>
        </div>
    )
}

export default AddBooks
