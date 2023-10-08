import './App.css';
import React, { useState, useEffect } from 'react'


function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resolve => resolve.json())
      .then(result => setData(result))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <div className="container">
      <h1>Hello React fetch Api </h1>
        <div className="row">

          {
            data.map((item) => {
              const {name,username,email,id} = item
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
  );
}

export default App;
