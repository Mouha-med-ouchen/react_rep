import { useState } from "react"

export default function Fruitslists() {
    const [fruitList, setfruitList] = useState([]);
    const [Fruit, setFruit] = useState('');

    const Fruitslist = () =>
        fruitList.map((f, index) => (
            <li key={index}>{f}</li>
        ))

    const Handelinpiut = (e) => {
        setFruit(e.target.value);
    }

    const handeladd = (e) => {
        e.preventDefault();
        setfruitList([...fruitList, Fruit])
    }
    return <>
        <span>
            <form>
                <input type="text" name="fruit" id="fruit" onChange={Handelinpiut} />
                <input type="submit" value="add new" onClick={handeladd} />
            </form>
        </span>
        <h1>Fruits:</h1>
        <ul>
            {Fruitslist()}
        </ul>
    </>
}