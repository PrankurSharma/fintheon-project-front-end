import React from "react";

function WeatherInfo({ myData }) {
    return (
        <div className="weather">
            <h2> IAQI </h2>
            {Object.keys(myData).map((key) => {
                if((key !== "t") && (key !=="p") && 
                (key !== "h") && (key !== "dew") &&
                (key !== "w")) {
                    return (
                        <h3 key={key}> {key.toUpperCase()} : {myData[key].v} </h3>
                    );
                }
                else {
                    if(key === "t") {
                        return (
                            <h3 key={key}> Temperature : {myData[key].v}°C </h3>
                        );
                    }
                    else if(key === "p") {
                        return (
                            <h3 key={key}> Pressure : {myData[key].v} </h3>
                        );
                    }
                    else if(key === "h") {
                        return (
                            <h3 key={key}> Humidity : {myData[key].v} </h3>
                        );
                    }
                    else if(key === "dew") {
                        return (
                            <h3 key={key}> Dew : {myData[key].v} </h3>
                        );
                    }
                    return (
                        <h3 key={key}> Wind : {myData[key].v} </h3>
                    );
                }
            })}
        </div>
    );
}

export default WeatherInfo;