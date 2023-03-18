import React from "react";

function Features({featureData}){
    return (
        <div className="features-container flex">
            {featureData.map((data) => {
                return (<div className="feature-box">
                    <img src={data.img} alt="" className="feature-img" />
                    <h3 className="feature-title">{data.title}</h3>
                    <p>{data.info}</p>
                </div>)
            })}
        </div>
    )
}

export default Features;