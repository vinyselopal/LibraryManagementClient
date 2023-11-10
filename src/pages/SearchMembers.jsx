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
        <div className="p-3 w-full">
            <h1 className="p-2 border-b-2">Search Members</h1>
            <div className="p-3 w-1/4 min-w-min">
                <div className="flex flex-row p-3 justify-between space-x-4">
                    <select name="filter" className="p-3" onChange={handleChange}>
                        <option value="all">All</option>
                        <option value="outstanding_debt">Outstanding debt</option>
                    </select>
                </div>
            </div>
            <List records={members} />
        </div>
    )
}

export default SearchMembers
