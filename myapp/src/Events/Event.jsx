export default function Event() {



    const handelClick = () => {
        alert("BOOM")

    }
    return (
        <>
            <h1>cours events:</h1>
            <input onKeyDownCapture={handelClick} />
        </>
    )
}