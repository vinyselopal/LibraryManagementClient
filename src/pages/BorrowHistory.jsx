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

    const ReturnAndPayButtons = (record) => {
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
            <div className="space-x-4">
                <button onClick={() => handleReturn(record)} className={`record_${record.id} bg-blue-500 p-2 rounded-sm text-white`}>Return</button>
                <button onClick={() => handlePayment(record)} className={`record_${record.id} bg-blue-500 p-2 rounded-sm text-white`}>Mark paid</button>
            </div>
        )
    }

    return (
        <div className="p-3 w-full">
            <h1 className="p-3 border-b-2">Borrow History</h1>
            {
                flashVisibility?
                <Flash message={flashMessage}/>:
                null
            }
            <div className="p-3 w-1/4 min-w-min">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="flex flex-row p-3 justify-between space-x-4">
                        <label name='book_author'>Book Author</label>
                        <input type="text" name='book_author'className="border-b-2" defaultValue={formData.book_author} onChange={handleChange} id='book_author'/>
                    </div>
                    <div className="flex flex-row p-3 justify-between space-x-4">
                        <label name='book_title'>Book Title</label>
                        <input type="text" name='book_title' className="border-b-2" defaultValue={formData.title} onChange={handleChange} id='book_title'/>
                    </div>
                    <div className="flex flex-row p-3 justify-between space-x-4">
                        <label name='issue_date'>Issue Date</label>
                        <input type="date" name='issue_date' className="border-b-2" defaultValue={formData.issue_date} onChange={handleChange} id='issue_date'/>
                    </div>
                    <div className="flex flex-row p-3 justify-between space-x-4">
                        <label name='issue_date'>Return Date</label>
                        <input type="date" name='issue_date' className="border-b-2"  defaultValue={formData.return_date} onChange={handleChange} id='return_date'/>
                    </div>
                    <div className="flex flex-row p-3 justify-between space-x-4">
                        <label name='member_email'>Member Email</label>
                        <input type="text" name='member_email' className="border-b-2" defaultValue={formData.member_email} onChange={handleChange} id='member_email'/>
                    </div>
                    <div className="p-3">
                        <button type='submit' className="bg-blue-500 p-2 rounded-sm text-white">Submit</button>
                    </div>
                </form>
            </div>
            <List records={transactions} actionButtons={ReturnAndPayButtons} />
        </div>
    )
}

export default BorrowHistory
