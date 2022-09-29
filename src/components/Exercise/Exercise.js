import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Gim from '../Gim/Gim';
import './Exercise.css';

const Exercise = () => {
    const [gims, setGims] = useState([])

    useEffect(() => {
        fetch('gim.json')
            .then(rse => rse.json())
            .then(data =>setGims(data))
    }, [])

    return (
        <div className="exercise-container">
            <div className="gim-container">
                {
                    gims.map(gim => <Gim
                        key={gim.id}
                        gim={gim}
                    ></Gim>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Exercise;