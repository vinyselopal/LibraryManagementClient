import {useEffect, useState} from "react"
import {getMembers} from '../apis'
import List from "../components/List"

const SearchMembers = () => {
    const [members, setMembers] = useState([])

    useEffect(() => {
        starterCall()
    }, [])

    const starterCall = async () => {
        const members = await getMembers()
        setMembers(members)
    }

    const handleChange = async (e) => {
        const filter = e.target.value
        const members = filter === "all" ? await getMembers() : await getMembers({outstanding_debt:true})
        setMembers(members)
    }

    return (
        <div className='books_form'>
            <h1>Search Members</h1>
            <div>
                <select name="filter" onChange={handleChange}>
                    <option value="all">All</option>
                    <option value="outstanding_debt">Outstanding debt</option>
                </select>
            </div>
            <List records={members} />
        </div>
    )
}

export default SearchMembers
