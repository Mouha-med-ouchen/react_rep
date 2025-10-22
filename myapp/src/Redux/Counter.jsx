import React from 'react'

export default function Counter() {

    const In = () => alert('increment')
    const Dn = () => alert('increment')
    return (
        <>

            <dev className='my-5'>
                < div className='text-conter my-2'>
                    <span className='badge bg-danger'></span>

                </ div >          <div className='btn-group' role='group' aria-label='Basic example'>
                    <button type='button ' className='btn btn-primary' onClick={In}>Increment</button>
                    <button type='button' className='btn btn-danger' onClick={Dn} > Decrement</button>

                </div>

            </dev>
        </>
    )
}
