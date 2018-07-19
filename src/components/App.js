import React from 'react';
import Inventory from './Inventory';
import Header from './Header';
import Order from './Order';
import samplefishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {

    constructor(){
        super();
        this.state={fishes:{},order:{}};
    }

    componentDidMount() {
        const { params } = this.props.match;

        const lsref = localStorage.getItem(params.storeID);
        if(lsref){
        this.setState({ order:JSON.parse(lsref) });
        }

        this.ref = base.syncState(`${params.storeID}/fishes`,{
            context:this,
            state:'fishes'
        });
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeID, JSON.stringify(this.state.order));
    }

    componentWillUnMount() {
        base.removeBinding(this.ref);
    }

    addFish=(fish) => {
        let fishes = { ...this.state.fishes };
        fishes[`fish${Date.now()}`] = fish;
        this.setState({
            fishes: fishes
        })
    };

    updateFish = (key, updateFish) => {
        const fishes = {...this.state.fishes};
        fishes[key] = updateFish;

        this.setState({fishes});
    }

    deleteFish = (key) => {
        const fishes = {...this.state.fishes};
        fishes[key] = null;

        this.setState({ fishes });
    }

    deleteOrder = (key) => {
        const order = { ...this.state.order };
        delete order[key];

        this.setState({ order });
    }

    loadSample = () => {
        this.setState({ fishes:samplefishes });
    }

    addToOrder = (key) => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order:order });
    }

    render() {
        return(
        <div className = 'main-page'>
        <div className='main'>
        <Header obj = {this.state.fishes} />
        <ul className='fish-list'>
        {Object.keys(this.state.fishes).map((key) => <Fish key= {key} index={key} details={this.state.fishes[key]} order={this.addToOrder}/>)}
        </ul>
        </div>
        <Order order={this.state.order} fishes={this.state.fishes} deleteOrder={this.deleteOrder} />
        <Inventory addFish = {this.addFish} sample= {this.loadSample} fishes={this.state.fishes} updateFish={this.updateFish} deleteFish={this.deleteFish} storeID={this.props.match.params.storeID}/>
        </div>
    );
}
}

export default App;