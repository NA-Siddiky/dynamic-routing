import { useEffect, useState } from "react"

const useSingleLoad = (id) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])

    return [user, setUser]

}


export default useSingleLoad;