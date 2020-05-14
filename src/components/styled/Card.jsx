import React from "react";

const Card = ({ title, children }) => (
    <div className="card">
        <div className="card-header">
            {title}
        </div>
        {children}
    </div>
)

export default Card;