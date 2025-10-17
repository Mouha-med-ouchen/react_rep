import React, { useCallback } from 'react'

export default function Math() {

    const a = 14;
    const b = 27;

    const handleClick = useCallback(() => {
        let res = a + b;
        console.log(res)
        return res;
    }, [a, b ])

    return (
        <div>
            <button onClick={handleClick} className='btn btn-primary ' > Calculate</button>
        </div>
    )
}
