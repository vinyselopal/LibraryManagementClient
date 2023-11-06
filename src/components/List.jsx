import Empty from "./Empty"

function List ({records}) {
    if (!records.length) {
        return <Empty />
    }
    return (
        <ul>
            {
                records.map(record => {
                    <li>
                        record.id
                    </li>
                })
            }
        </ul>
    )
}
export default List
