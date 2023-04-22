import React from "react";

import "./ShowSymp.css";

function ShowSymp(props) {
    const deleteItem = (key) => {
        const newList = props.selectedSymptoms.filter((itemObj) => {
            return itemObj.key !== key;
        });
        props.setSelectedSymptoms(newList);
    };

    return (
        <div className="symp-field">
            {props.selectedSymptoms.map((dataObj, i) => {
                return (
                    <div key={i} className="showinrow">
                        <div className="symp-name">
                            <h4 className="symname">{dataObj.item.replaceAll("_", " ")}</h4>
                        </div>
                        <button
                            className="delete-button"
                            onClick={() => deleteItem(dataObj.key)}
                        >
                            X
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default ShowSymp;
