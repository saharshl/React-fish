import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {

    handleClick = () => {
        this.props.order(this.props.index);
    }
    render(){
    const availability = this.props.details.status === 'available';
    return (
        <li className="menu-fish">
        <img src={this.props.details.image} alt={this.props.details.name} />
        <h3 className='fish-name'>{this.props.details.name}
        <span>{formatPrice(this.props.details.price)}</span>
        </h3>
        <p>{this.props.details.desc}</p>
        <button disabled={!availability} onClick={this.handleClick}>{ availability ? "Add to Cart" : "Sold Out"}</button>
        </li>
    );
}
}

export default Fish;