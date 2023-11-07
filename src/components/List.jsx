import Empty from "./Empty"
import { useEffect, useState } from "react"

function List ({records, actionButton}) {


    useEffect(() => {
        console.log(records)
    }, [records])

    if (!records.length) {
        return <Empty />
    }


    return (
        <div>
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
                                    {
                                        actionButton(record)
                                    }
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
