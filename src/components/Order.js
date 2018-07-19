import React from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Order extends React.Component {

    renderFun = (key) => {
        let count = this.props.order[key];
        let fish = this.props.fishes[key];
        let availibility = fish && fish.status === 'available';
        if(!fish) return null;
        if(!availibility) {
        return (
        <CSSTransition classNames='fish-total' key={key} timeout={{ enter: 5000,exit: 5000 }}>
        <li key={key}>Sorry fish is not available</li>
        </CSSTransition>
        )
    }
        return (
            <CSSTransition classNames='fish-total' key={key} timeout={{ enter: 5000, exit: 5000 }}>
            <li key={key}>
                {count} lbs {fish.name}

                {formatPrice(fish.price)}
                <button onClick={() => this.props.deleteOrder(key)}>x</button>
                </li>
                </CSSTransition>
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
        <TransitionGroup component='ul' className='fish-total'>
        {orderIds.map(this.renderFun)}
        </TransitionGroup>
        <strong>{formatPrice(total)}</strong>
        </div>
    );
}
}
export default Order;