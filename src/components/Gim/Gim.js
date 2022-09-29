import React from 'react';
import './Gim.css';

const Gim = ({gim, handleAddToCart }) => {

    const {img, name, p, time} = gim;

    return (
        
        <div className="card w-4/5 h-96 bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt="Shoes" />
            </figure>
        <div className="card-body">
            <h2 className={name}>Shoes!</h2>
                <p>{p}</p>
                <p>{time}</p>
            <div className="card-actions justify-end">
            <button onClick={() => handleAddToCart(gim)} className="btn btn-primary w-full absolute bottom-0 left-0">Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default Gim;