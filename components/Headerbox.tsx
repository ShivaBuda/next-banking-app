import React from "react";

const Headerbox = ({type = "title", title, subtext, user}: HeaderBoxProps) => {
    return (
        <div>
            <h1>
                {title} {type === "greeting" && <span>{user}</span>}
            </h1>
            <p>{subtext}</p>
        </div>
    );
};

export default Headerbox;
