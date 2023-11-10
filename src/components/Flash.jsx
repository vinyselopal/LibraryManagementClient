import { useEffect } from "react"

function Flash ({message}) {

    return (
        <div className="p-3 bg-yellow-100">{message.toString()}</div>
    )
}

export default Flash
