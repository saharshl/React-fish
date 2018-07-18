import React from 'react';
import AddFish from './AddFish';
import FishInvent from './FishInvent';

function Inventory(props) {
    return (
        <div className="inventory">
        <h3>Inventory</h3>
        {Object.keys(props.fishes).map((key) => <FishInvent key={key} fish={props.fishes[key]} updateFish={props.updateFish} index={key} deleteFish={props.deleteFish}/>)}
        <AddFish addFish={props.addFish}/>
        <button onClick={props.sample}>Load Sample </button>
        </div>
    );
}

export default Inventory;