import {useState, useEffect} from "react"
import {issueBook} from '../apis'

import Flash from "../components/Flash"

const AddBooks = () => {
    const [formData, setFormData] = useState({book_author: '', book_title: '', member_email: "", issue_date: ""})
    const [flashMessage, setFlashMessage] = useState("")
    const [flashVisibility, setFlashVisibility] = useState(false)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const confirmation = await issueBook(formData)
        setFlashMessage(confirmation)
        setFlashVisibility(true)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((preFormData) => ({...preFormData, [name]: value}))
    }

    return (
        <div className="p-3 w-full">
            <h1 className="p-3 border-b-2">Issue Book</h1>
            {
                flashVisibility?
                <Flash message={flashMessage}/>:
                null
            }
            <div className="p-3 w-1/4 min-w-min">
                <form onSubmit={handleFormSubmit} className="flex flex-col">
                    <div className="flex flex-row p-3 justify-between space-x-4">
                        <label name='book_author'>Author</label>
                        <input type="text" name='book_author' className="border-b-2" defaultValue={formData.book_author} onChange={handleChange} id='book_author'/>
                    </div>
                    <div className="flex flex-row p-3 justify-between space-x-4">
                        <label name='book_title'>Title</label>
                        <input type="text" name='book_title' className="border-b-2" defaultValue={formData.book_title} onChange={handleChange} id='book_title'/>
                    </div>
                    <div className="flex flex-row p-3 justify-between space-x-4">
                        <label name='member_email'>Member</label>
                        <input type="text" name='member_email' className="border-b-2" defaultValue={formData.member_email} onChange={handleChange} id='member_email'/>
                    </div>
                    <div className="flex flex-row p-3 justify-between space-x-4">
                        <label name='issue_date'>Issue Date</label>
                        <input type="date" name='issue_date' className="border-b-2" defaultValue={formData.issue_date} onChange={handleChange} id='issue_date'/>
                    </div>
                    <div className="p-3">
                        <button type='submit' className="bg-blue-500 p-2 rounded-sm text-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBooks
