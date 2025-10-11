// import { Component } from "react";

import { useEffect, useState } from "react";

// export default class Counter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             displayName: true,
//         };
//     }

//     toggleName = () => {
//         this.setState(prevState => ({
//             displayName: !prevState.displayName
//         }));

//     };

//     render() {
//         return (
//             <>
//                 <button onClick={this.toggleName}>
//                     - {this.state.displayName.toString()} -
//                 </button>

//                 {this.state.displayName === true ? <h1>Hello Mohamed</h1> : undefined}

//                 {/* hook useEffect */}
//                 <span>
//                     <button></button>


//                </span>
//             </>
//           
//     }
// }


export default function Counter({ initialValue, step = 0 }) {
    const [count, setCount] = useState(initialValue)
    const age = 20;
    useEffect(effect => {
        console.log('component is mounted')
    }, [])

    useEffect(effect => {
        console.log('component updated')
    }, [age])
    return <>
        <button onClick={() => {
            setCount(pereState => {
                return pereState + 1
            })
        }}>++++</button>

        <button onClick={() => {
            setCount(pereState => {
                return pereState - 1
            })
        }}>-----</button>

        <button onClick={() => {
            setCount(0)
        }}>rest!</button>
        <h1>{count}</h1>
    </>
}



