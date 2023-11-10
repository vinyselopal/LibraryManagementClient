import {useState, useEffect} from "react"
import {importBooks} from '../apis'
import List from "../components/List"
import {addBooks} from "../apis"
import Flash from "../components/Flash"

const AddBooks = () => {
    const [formData, setFormData] = useState({author: '', title: '', quantity: 0})
    const [books, setBooks] = useState([])
    const [selectedBooks, setSelectedBooks] = useState([])
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
        console.log(formData)
    }, [formData])

    const selectButton = (record) => {
        const handleAddition = (record) => {
            if (!selectedBooks.find(item => item.id === record.id)) {
                setSelectedBooks(prevselectedBooks => [...prevselectedBooks, record])
            }
        }
        return (
            <button onClick={() => handleAddition(record)} className={`record_${record.id} bg-blue-500 p-2 rounded-sm text-white`}>Select</button>
        )
    }

    const handleSubmission = async () => {
        const confirmation = await addBooks(selectedBooks)
        setFlashMessage(confirmation)
        setFlashVisibility(true)
    }

    return (
        <div className="p-3 w-full">
            <h1 className="p-3">Add Books</h1>
            {
                flashVisibility?
                <Flash message={flashMessage}/>:
                null
            }
            <div className="p-3 w-1/4 min-w-min">
                <div>
                    <form className="flex flex-col" onSubmit={handleFormSubmit}>
                        <div className="flex flex-row p-3 justify-between space-x-4">
                            <label name='author'>Author</label>
                            <input type="text" name='author' className="border-b-2" defaultValue={formData.author} onChange={handleChange} id='author'/>
                        </div>
                        <div className="flex flex-row p-3 justify-between space-x-4">
                            <label name='title'>Title</label>
                            <input type="text" name='title' className="border-b-2" defaultValue={formData.title} onChange={handleChange} id='title'/>
                        </div>
                        <div className="flex flex-row p-3 justify-between space-x-4">
                            <label name='quantity'>Quantity</label>
                            <input type="number" className="border-b-2" min="1" defaultValue={formData.quantity} onChange={handleChange} id='quantity' name='quantity' />
                        </div>
                        <div className="p-3 space-x-4 ">
                            <button type='submit' className="bg-blue-500 p-2 rounded-sm text-white">Import</button>
                            <button onClick={handleSubmission} className="bg-blue-500 p-2 rounded-sm text-white">Add selected records</button>
                        </div>
                    </form>
                </div>
            </div>
            <List records={books} actionButtons={selectButton}/>
        </div>
    )
}

export default AddBooks
