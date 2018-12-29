import React, { useState } from 'react'


function handleCountChange(action, prevCount) {
    switch (action.type) {
        case 'increment': return (prevCount + 1);
        case 'decrement': return ((prevCount-1 < 0) ? 0:(prevCount-1));
        default:          return alert("Unkown Action...!");
    }
}

export default (props) => {

    const [count, setCount] = useState(props.initialCount);

    return (
        <section className="row-container">
            <h1>{count}</h1>
            <div className="flexed">
                <input
                    type="button"
                    onClick = {() => setCount(handleCountChange({type:'increment'}, count))}
                    className="btn btn-success"
                    value="Increment"/>
                <input
                    type="button"
                    onClick = {() => setCount(handleCountChange({type:'decrement'}, count))}
                    className="btn btn-secondary"
                    value="Decrement"/>
            </div>
        </section>
    );
}