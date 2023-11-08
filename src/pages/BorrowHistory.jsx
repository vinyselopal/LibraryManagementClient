import {useState} from "react"
import {getTransactions, chargeBookFee, returnBook} from '../apis'
import List from "../components/List"
import Flash from "../components/Flash"

const BorrowHistory = () => {
    const [formData, setFormData] = useState({book_author: '', book_title: '', issue_date: "", return_date: "", member_email: "", payment_done: ""})
    const [transactions, setTransactions] = useState([])
    const [flashMessage, setFlashMessage] = useState("")
    const [flashVisibility, setFlashVisibility] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await getTransactions(formData)
        console.log('response', response)
        setTransactions(response)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((preFormData) => ({...preFormData, [name]: value}))
    }

    const returnAndPayButtons = (record) => {
        const handleReturn = async (record) => {
            const confirmation = await returnBook(record.id)
            setFlashMessage(confirmation)
            setFlashVisibility(true)
        }
        const handlePayment = async (record) => {
            const confirmation = await chargeBookFee(record.id)
            setFlashMessage(confirmation)
            setFlashVisibility(true)
        }

        return (
            <div>
                <button onClick={() => handleReturn(record)} className={`record_${record.id}`}>Return</button>
                <button onClick={() => handlePayment(record)} className={`record_${record.id}`}>Mark paid</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Borrow History</h1>
            {
                flashVisibility?
                <Flash message={flashMessage}/>:
                null
            }
            <div>
                <form onSubmit={handleSubmit}>
                    <label name='book_author'>Book Author</label>
                    <input type="text" defaultValue={formData.book_author} onChange={handleChange} name='book_author'/>
                    <label name='book_title'>Book Title</label>
                    <input type="text" defaultValue={formData.title} onChange={handleChange} name='book_title'/>
                    <label name='issue_date'>Issue Date</label>
                    <input type="date" defaultValue={formData.issue_date} onChange={handleChange} name='issue_date'/>
                    <label name='issue_date'>Return Date</label>
                    <input type="date" defaultValue={formData.return_date} onChange={handleChange} name='return_date'/>
                    <label name='member_email'>Member Email</label>
                    <input type="text" defaultValue={formData.member_email} onChange={handleChange} name='member_email'/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <List records={transactions} actionButtons={returnAndPayButtons} />
        </div>
    )
}

export default BorrowHistory
