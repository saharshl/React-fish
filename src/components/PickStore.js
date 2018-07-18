import React from 'react';
import { getFunName } from '../helpers.js';

class PickStore extends React.Component {
    constructor() {
        super();
        this.visitStore=this.visitStore.bind(this);
    }

    myInput=React.createRef();

    visitStore(event) {
        event.preventDefault();
        let storeName = this.myInput.value.value;
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return(
        <div className = "pick">
        <h3>Pick a store</h3>
        <form className="sub" onSubmit={this.visitStore}>
        <input type='text' required placeholder='Enter store' ref={this.myInput} defaultValue={getFunName()} />
        <button type ="submit">Visit</button>
        </form>
        </div>
    )
}
}

export default PickStore;