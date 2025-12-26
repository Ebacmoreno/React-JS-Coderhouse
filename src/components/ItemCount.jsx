import { useState } from "react";

const ItemCount = () => {
    // variavle y funcion controladora
    const [counter, setCounter] = useState(1)

    // Funciones que actualiza el contador
    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return (
        <div>
            <button onClick={restar}>-</button>
            <span>{counter}</span>
            <button onClick={sumar}>+</button>
        </div>
    );
}

export default ItemCount;