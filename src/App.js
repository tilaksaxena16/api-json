import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => setData(json))
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className="App">
                <h2>Customer Email</h2>
                {
                    data.map((item) => {
                        return (
                            <div className="col-md-4 col-10 mx-auto" >
                                <div className="card">
                                    <img src={item.thumbnailUrl} className="card-img-top" alt={item.url} />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">{item.title}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}

export { App };