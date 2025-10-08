export default function Fruite({ fruits }) {
    const displayFruits = () => {
        return fruits.map((fruit) => (
            <li>{fruit}</li>
        ));
    };
    fruits.push('aklll')
    return (
        <>
            <ul>
                <li> {displayFruits()}</li>
            </ul>
        </>
    );
}
// import { Component } from "react";
// export default class Fruits extends Component {
// dfruits = () => {
// return this.props.fruits.map((fruit) => (
// <li>{fruit}</li>
// ))
//
// }
// fruits.push('gggg');
// render() {
// return (
//
// <ul>{this.dfruits()}</ul>
//
// )
// }
// }