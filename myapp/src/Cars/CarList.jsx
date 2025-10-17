import React from 'react'


let cars = [
    {
        brand: "Toyota",
        model: "Corolla",
        carBody: "Sedan",
        color: "White",
        price: 23000,
        year: 2022
    },
    {
        brand: "Honda",
        model: "Civic",
        carBody: "Sedan",
        color: "Silver",
        price: 25000,
        year: 2023
    },
    {
        brand: "Ford",
        model: "Mustang",
        carBody: "Coupe",
        color: "Red",
        price: 42000,
        year: 2021
    },
    {
        brand: "Chevrolet",
        model: "Camaro",
        carBody: "Coupe",
        color: "Yellow",
        price: 45000,
        year: 2022
    },
    {
        brand: "Tesla",
        model: "Model 3",
        carBody: "Sedan",
        color: "Black",
        price: 52000,
        year: 2024
    },
    {
        brand: "BMW",
        model: "X5",
        carBody: "SUV",
        color: "Blue",
        price: 68000,
        year: 2023
    },
    {
        brand: "Mercedes-Benz",
        model: "C-Class",
        carBody: "Sedan",
        color: "Gray",
        price: 60000,
        year: 2022
    },
    {
        brand: "Audi",
        model: "A4",
        carBody: "Sedan",
        color: "White",
        price: 48000,
        year: 2023
    },
    {
        brand: "Nissan",
        model: "Altima",
        carBody: "Sedan",
        color: "Silver",
        price: 24000,
        year: 2021
    },
    {
        brand: "Hyundai",
        model: "Tucson",
        carBody: "SUV",
        color: "Gray",
        price: 29000,
        year: 2024
    },
    {
        brand: "Kia",
        model: "Sportage",
        carBody: "SUV",
        color: "Black",
        price: 31000,
        year: 2023
    },
    {
        brand: "Mazda",
        model: "CX-5",
        carBody: "SUV",
        color: "Red",
        price: 32000,
        year: 2022
    },
    {
        brand: "Volkswagen",
        model: "Golf",
        carBody: "Hatchback",
        color: "Blue",
        price: 27000,
        year: 2021
    },
    {
        brand: "Subaru",
        model: "Outback",
        carBody: "Wagon",
        color: "Green",
        price: 34000,
        year: 2023
    },
    {
        brand: "Jeep",
        model: "Wrangler",
        carBody: "SUV",
        color: "Orange",
        price: 39000,
        year: 2022
    },
    {
        brand: "Lexus",
        model: "RX 350",
        carBody: "SUV",
        color: "White",
        price: 62000,
        year: 2024
    },
    {
        brand: "Porsche",
        model: "911 Carrera",
        carBody: "Coupe",
        color: "Gray",
        price: 125000,
        year: 2023
    },
    {
        brand: "Ferrari",
        model: "F8 Tributo",
        carBody: "Coupe",
        color: "Red",
        price: 280000,
        year: 2022
    },
    {
        brand: "Lamborghini",
        model: "Huracán EVO",
        carBody: "Coupe",
        color: "Yellow",
        price: 310000,
        year: 2024
    },
    {
        brand: "Peugeot",
        model: "3008",
        carBody: "SUV",
        color: "Blue",
        price: 36000,
        year: 2023
    }
];

cars = [{
    brand: "Ferrari",
    model: "F8 Tributo",
    carBody: "Coupe",
    color: "Red",
    price: 280000,
    year: 2022
}]

function Car({ brand, model, carBody, color, price, year }) {
    return <>
        <tr>
            <td>{brand}</td>
            <td>{model}</td>
            <td>{carBody}</td>
            <td>{color}</td>
            <td>{price}</td>
            <td>{year}</td>
        </tr>
    </>;
}
<Car />

export default function CarList() {
    const DisplayCars = () => {
        return cars.map((car, key) => {
            const { brand, model, carBody, color, price, year } = car;
            return <Car
                key={key}
                brand={brand}
                model={model}
                carBody={carBody}
                color={color}
                price={price}
                year={year}
            />;
        })
    }

    return (

        <>
            {cars.length > 0 ? (
                <table className="container table table-striped table-bordered mt-3">
                    <thead className="table-dark">
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Car Body</th>
                            <th>Color</th>
                            <th>Price</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DisplayCars()}
                    </tbody>
                </table>
            ) : (
                <div className="alert alert-warning">No element</div>
            )}


        </>


    )
}
