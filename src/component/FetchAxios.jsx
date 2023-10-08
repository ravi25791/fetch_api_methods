import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FetchAxios = () => {
    const [myData, setMyData] = useState([])
    const [error,setError] =useState("")



    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => setMyData(response.data))
            .catch((err)=>{setError(err.message)})

    }, [])

    return (
        <div>
            <h1>This is Fetch Method With Axios</h1>
            <h2>{error==! "" && {error}}</h2>
            <div className="conatiner">
                <div className="row">
                    {
                        myData.map((items) => {
                            const { userId, title, body, id } = items;
                            return (
                                <div className="col-md-4" key={id}>
                                    <div className="card" style={{ width: "18rem", margin: "10px" }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <p className="card-text">{body}</p>
                                            <p>{userId}</p>
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
