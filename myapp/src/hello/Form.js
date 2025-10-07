// export default function from(props) {
//     return (
//         <>
//             <label>{props.LB }</label>
//             <input placeholder={props.PL} name={props.name} />
//             <div>{props.children }</div>
//         </>
//     )
// }

import { Component } from "react"

export default class Form extends  Component{
    render(){
        return (
            <>
            <label>{this.props.LB }</label>
            <input placeholder={this.props.PL} name={this.props.name} />
           <div>{this.props.children }</div>
            </>
        )
    }
}
