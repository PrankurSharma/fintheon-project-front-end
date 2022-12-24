import React from "react";

function CityInfo({ myData }) {
    return (
        <div className="city">
            {Object.keys(myData).map((key) => {
                return (
                    <div key={key}>
                        {(key !== "AQI") && (<h3 className="citdet"> {key} : {myData[key]} </h3>)}
                        {(key === "AQI") && (
                            <div className= {(myData[key] <= 50) ? "good" : 
                                             (myData[key] > 50 && myData[key] <= 100) ? "mod" : 
                                             (myData[key] > 100 && myData[key] <= 150) ? "uns" :
                                             (myData[key] > 150 && myData[key] <= 200) ? "un" :
                                             (myData[key] > 200 && myData[key] <= 300) ? "vun" : "haz"
                                            }>
                                <h3 className="aqidet"> {key} </h3>
                                <h3 className="aqidet"> {myData[key]} </h3>
                                {myData[key] <= 50 && <h3 className="aqidet"> Good </h3>}
                                {(myData[key] > 50 && myData[key] <= 100) && <h3 className="aqidet"> Moderate </h3>}
                                {(myData[key] > 100 && myData[key] <= 150) && <h3 className="aqidet"> Unhealthy for Sensitive Groups </h3>}
                                {(myData[key] > 150 && myData[key] <= 200) && <h3 className="aqidet"> Unhealthy </h3>}
                                {(myData[key] > 200 && myData[key] <= 300) && <h3 className="aqidet"> Very Unhealthy </h3>}
                                {myData[key] > 300 && <h3 className="aqidet"> Hazardous </h3>}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default CityInfo;