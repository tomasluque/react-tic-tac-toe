import { useState } from "react";

export default function Info({ moves }) {
    const [toggle, setToggle] = useState(true);

    function toggleOrder() {
        setToggle(!toggle);
    }

    return (
        <>
            <button className="sortButton" onClick={() => toggleOrder()}>
                Toggle Order
            </button>
            <ol>{toggle ? moves : moves.slice().reverse()}</ol>
        </>
    );
}
