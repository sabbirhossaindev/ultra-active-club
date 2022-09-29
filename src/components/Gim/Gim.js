import React from 'react';
import './Gim.css';

const Gim = ({gim, handleAddToCart }) => {

    const {img, name, p, time} = gim;

    return (
        <section>
            <div className="card w-4/5 h-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="" />
                </figure>
            <div className="card-body">
                <h2 className='text-xl'>{name}.</h2>
                    <p>{p}</p>
                    <p className='text-primary'>{time} min</p>
                <div className="card-actions justify-end">
                <button onClick={() => handleAddToCart(gim)} className="btn btn-primary w-full absolute bottom-0 left-0">Add too cart</button>
                </div>
            </div>
            </div>
        </section>
        
        
    );
};

export default Gim;