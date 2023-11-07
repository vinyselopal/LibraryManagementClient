import Empty from "./Empty"
import { useEffect, useState } from "react"

function List ({records}) {

    const [selectedRecords, setSelectedRecords] = useState([])

    useEffect(() => {
        console.log(records)
    }, [records])

    if (!records.length) {
        return <Empty />
    }

    const handleAddition = (record) => {
        setSelectedRecords(prevSelectedRecords => [...prevSelectedRecords, record])
    }

    const handleSubmission = () => {

    }

    return (
        <div>
            <button onClick={handleSubmission}>Add selected records</button>
            <table>
                <thead>
                    <tr>
                        {
                            Object.keys(records[0]).map(key =>
                                <th>{key}</th>
                                )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map(record =>
                            <tr className={`record_${record.id}`} key={`record_${record.id}`}>
                                {
                                    Object.keys(record).map(key =>
                                        <td>
                                            {record[key]}
                                        </td>
                                    )
                                }
                                <td>
                                    <button onClick={() => handleAddition(record)} className={`record_${record.id}`}>Select</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default List
