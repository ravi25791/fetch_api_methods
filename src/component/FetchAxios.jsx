import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FetchAxios = () => {
    const [myData, setMyData] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setMyData(response))

    }, [])

    return (
        <div>
            <h1>This is Fetch Method With Axios</h1>
            <div className="conatiner">
                <div className="row">
                    {
                        myData.map((items) => {
                            const { name, username, email, id } = items;
                            return (
                                <div className="col-md-4" key={id}>
                                    <div className="card" style={{ width: "18rem", margin: "10px" }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{name}</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <p>{username}</p>
                                            <p>{email}</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FetchAxios
