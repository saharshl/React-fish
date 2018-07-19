import React from 'react';
import AddFish from './AddFish';
import firebase from 'firebase';
import FishInvent from './FishInvent';
import Login from './Login';
import base, { firebaseApp } from '../base';

class Inventory extends React.Component {

    constructor() {
        super();
        this.state = {uid:null,owner:null};
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(((user) => {
            if(user){
                this.authHandler({ user });
            }
        }))
    }

    authHandler = async (data) => {
        const store = await base.fetch(this.props.storeID, {context:this});
        console.log(store);

        if(!store.owner) {
            await base.post(`${this.props.storeID}/owner`,{
                data: data.user.uid
            })
        }

        this.setState({
            uid: data.user.uid,
            owner: store.owner || data.user.uid
        })
    }

    authenticate = (val) => {
        const authProvider = new firebase.auth[`${val}AuthProvider`]();
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    }

    logout = async () => {
        console.log('out');
        await firebase.auth().signOut();

        this.setState({uid:null});
    }

    render() {

        const logout = <button onClick={this.logout}>Log Out</button>;

        if(!this.state.uid){
    return <Login authenticate={this.authenticate}/>;
        }
        if(this.state.uid !== this.state.owner){
            return (
                <div>
                    <h3>You are not the owner</h3>
                    {logout}
                    </div>
            )
        }
    return (
        <div className="inventory">
        <h3>Inventory</h3>
        {logout}
        {Object.keys(this.props.fishes).map((key) => <FishInvent key={key} fish={this.props.fishes[key]} updateFish={this.props.updateFish} index={key} deleteFish={this.props.deleteFish}/>)}
        <AddFish addFish={this.props.addFish}/>
        <button onClick={this.props.sample}>Load Sample </button>
        </div>
    );
}
}

export default Inventory;