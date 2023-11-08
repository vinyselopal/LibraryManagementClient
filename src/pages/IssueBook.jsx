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
        <div>
            <h1>Issue Book</h1>
            {
                flashVisibility?
                <Flash message={flashMessage}/>:
                null
            }
            <div>
                <form onSubmit={handleFormSubmit}>
                    <label name='book_author'>Author</label>
                    <input type="text" defaultValue={formData.book_author} onChange={handleChange} name='book_author'/>
                    <label name='book_title'>Title</label>
                    <input type="text" defaultValue={formData.book_title} onChange={handleChange} name='book_title'/>
                    <label name='member_email'>Member</label>
                    <input type="text" defaultValue={formData.member_email} onChange={handleChange} name='member_email'/>
                    <label name='issue_date'>Issue Date</label>
                    <input type="date" defaultValue={formData.issue_date} onChange={handleChange} name='issue_date'/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddBooks
