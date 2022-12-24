import React from "react";
import Charts from "./Charts";

function ImplementCharts({ myData, filled }) {
    const weekday = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];
    return (
        <div className="polgra">
           {Object.keys(myData).map((key) => {
                return (
                    <div className="polls" key={key}>
                        <h3> {key.toUpperCase()} </h3>
                        <h3> Max and Min Values </h3>
                        <div className="temps">
                            {myData[key].map((ele) => {
                                return (
                                    <div className="entries" key={ele.day}>
                                        <h4> {weekday[new Date(ele.day).getDay()]}{new Date(ele.day).getDate()} </h4>
                                        <h4> {ele.max} </h4>
                                        <h4> {ele.min} </h4>
                                    </div>
                                );
                            })}
                        </div>
                        <Charts mydata={myData[key]} filled={filled} />
                    </div>
                );
           })}
        </div>
    );
}

export default ImplementCharts;