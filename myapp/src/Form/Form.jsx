import { useState } from "react"

export default function Form() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const handeNameInput = () => {
        const name = document.getElementById('name').value
        setName(name)
    }

    const handeAgeInput = () => {
        const age = document.getElementById('age').value
        setAge(age)
    }
    const submit = (e) => {
        e.preventDefault()
        console.log({
            name: name,
            age: age
        })
    }
    return <>

        <input name="name" id="name" type="text" placeholder="name" onChange={handeNameInput} />
        <input type="number" id="age" name="age" placeholder="age" onChange={handeAgeInput} />
        <input type="submit" onClick={submit} value="add" />


        <div>
            <h1>name and age are modifed</h1>
            <h2>name:{name}</h2>
            <h2>age: {age}</h2>
        </div>
    </>
}