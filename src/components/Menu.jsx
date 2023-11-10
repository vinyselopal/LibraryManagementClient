import {Link} from "react-router-dom"

function Menu () {
    return (
        <div className="flex flex-col p-3 w-72 shadow-lg h-full">
            <Link to="/add_books">
                <div className="p-3">
                    Add Books
                </div>
            </Link>
            <Link to="/borrow_history">
                <div className="p-3">
                    Borrow History
                </div>
            </Link>
            <Link to="/issue_book">
                <div className="p-3">
                    Issue Book
                </div>
            </Link>
            <Link to="/search_books">
                <div className="p-3">
                    Search Books
                </div>
            </Link>
            <Link to="/search_members">
                <div className="p-3">
                    Search Members
                </div>
            </Link>
        </div>
    )
}

export default Menu
