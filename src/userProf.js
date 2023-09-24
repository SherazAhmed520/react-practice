import React, { useEffect, useState } from 'react'



export default function UserProf() {

    const [user, setUser] = useState([])

    const getUser = async () => {
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUser(data);
            }

            )
    }
    useEffect(() => {
        getUser();
    }, [])






    return (
        <div>

            API DATA

            {user.map((e) => {
                return <>
                    <h1>{e.name}</h1>
                    <h2>{e.email}</h2>
                    <h3>{e.username}</h3>
                </>
            }

            )}


        </div>
    )
}
