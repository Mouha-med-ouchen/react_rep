import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>🧩 Hook Test</h2>
            <h1>{count}</h1>
            <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => setCount(c => c + 1)}>+1</button>
                <button onClick={() => setCount(c => c - 1)}>-1</button>
                <button onClick={() => setCount(0)}>rest!</button>
            </div>
        </>
    );
}
