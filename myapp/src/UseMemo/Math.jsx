import React, { useState, useMemo, useRef, useEffect } from 'react';

export default function Math() {
    const [n, setN] = useState(0);
    const [time, setTime] = useState(0);
    const text = useRef();

    // دالة الحساب المكلف
    const expensiveCalcul = (value) => {
        console.log('Calcul in progress');
        for (let i = 0; i <= 10000000; i++) {
            value++;
        }
        return value;
    };

    // حفظ نتيجة الحساب عند تغير n
    const calculatedValue = useMemo(() => {
        const start = performance.now();
        const result = expensiveCalcul(n);
        const end = performance.now();
        setTime((end - start).toFixed(2));
        return result;
    }, [n]);

    // عند الضغط على الزر
    const handleClick = () => {
        setN(parseInt(text.current.value));
    };

    return (
        <div className="container mt-3">
            <input
                type="number"
                ref={text}
                defaultValue={0}
                className="form-control w-25 d-inline"
            />
            <button className="btn btn-primary ms-2" onClick={handleClick}>
                Re-render
            </button>

            <h1 className="mt-3">Value: {calculatedValue}</h1>
            <h2>Time taken: {time} ms</h2>
        </div>
    );
}
