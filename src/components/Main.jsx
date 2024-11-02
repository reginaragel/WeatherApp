import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const api={
    key:'df0202d1bc3438c9bfd25775c7d284de',
    base:'https://api.openweathermap.org/data/2.5/',
}

const Main=()=>{
    const [userinput,setUserInput]=useState('');
    const [weather,setWeather]=useState({});

    const handleSearch=(e)=>{
        e.preventDefault();
        
        fetch( `${api.base}weather?q=${userinput}&units=metric&APPID=${api.key}`)
        .then((res)=>res.json())
        .then(result=>{
            console.log(result)
            setWeather(result)
        })
    }

    return(
        <div className="container mt-5 p-4">
            <div className="card ">
                 <h1 className="card-title text-secondary ">Weather App</h1>
                <div className="card-body">
                 <div className="d-flex justify-content-between align-items-center">
                    <input className="form-control" type="text" placeholder="Enter the City" 
                    value={userinput} onChange={(e)=>setUserInput(e.target.value)}required/>
                    <button className="btn btn-primary" onClick={handleSearch}>Search</button>
                 </div>
                 <div className="data mt-4 p-3">
                    <div className="city form-control d-flex justify-content-between align-items-center">
                        <label>City:</label>
                        <span>{weather.name}</span>
                    </div>
                    <div className="temp form-control d-flex justify-content-between align-items-center">
                        <label>Temperature:</label>
                        <span>{weather.main.temp}</span>
                    </div>
                    <div className="humi form-control d-flex justify-content-between align-items-center">
                        <label>Humidity:</label>
                        <span>{weather.main.humidity}</span>
                    </div>
                    <div className="condi form-control d-flex justify-content-between align-items-center">
                        <label>Condition:</label>
                        <span >{weather.weather[0].main}</span>
                    </div>
                    <div className="descrp form-control d-flex justify-content-between align-items-center">
                        <label>Description:</label>
                        <span>{weather.weather[0].description}</span>
                    </div>
                 </div>

                </div>
            </div>
            
            

       
        </div>
    )
}
export default  Main