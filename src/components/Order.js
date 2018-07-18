import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {

    renderFun = (key) => {
        let count = this.props.order[key];
        let fish = this.props.fishes[key];
        let availibility = fish && fish.status === 'available';
        if(!fish) return null;
        if(!availibility)
        return <li key={key}>Sorry fish is not available</li>
        else
        return (
            <li key={key}>
                {count} lbs {fish.name}

                {formatPrice(fish.price)}
                <button onClick={() => this.props.deleteOrder(key)}>x</button>
                </li>
        )
    }

    render() {
        let orderIds = Object.keys(this.props.order);
        let total = orderIds.reduce((prevtotal,key) => {
            console.log(this.props.fishes);
            let count = this.props.order[key];
            let fish = this.props.fishes[key];
            let availibility = fish && fish.status === 'available';
            if(availibility)
            return prevtotal + (count*fish.price);
            else
            return prevtotal;
        },0);

    return (
        <div className="order">
        <h2>Order</h2>
        <ul className = 'fish-total'>
        {orderIds.map(this.renderFun)}
        </ul>
        <strong>{formatPrice(total)}</strong>
        </div>
    );
}
}
export default Order;