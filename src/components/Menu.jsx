import {Link} from "react-router-dom"

function Menu () {
    return (
        <div>
            <Link to="/add_books">Add Books</Link>
            <Link to="/borrow_history">Borrow History</Link>
            <Link to="/issue_book">Issue Book</Link>
            <Link to="/search_books">Search Books</Link>
            <Link to="/search_members">Search Members</Link>
        </div>
    )
}

export default Menu
