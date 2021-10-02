import { useEffect, useState } from "react"

const useLoad = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return [users, setUsers]
}

export default useLoad;