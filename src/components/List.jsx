import Empty from "./Empty"
import { useEffect, useState } from "react"

function List ({records, actionButtons}) {


    useEffect(() => {
        console.log("records", records)
    }, [records])

    if (!records.length) {
        return <Empty />
    }


    return (
        <div className="border-t-2 p-3">
            <table>
                <thead>
                    <tr className="border-b-2">
                        {
                            Object.keys(records[0]).map(key =>
                                <th className="p-3">{key}</th>
                                )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map(record =>
                            <tr className={`record_${record.id} border-b-2`} key={`record_${record.id}`}>
                                {
                                    Object.keys(record).map(key =>
                                        <td className="p-3">
                                            {record[key]}
                                        </td>
                                    )
                                }
                                <td>
                                    {
                                        actionButtons ? actionButtons(record) : null
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
