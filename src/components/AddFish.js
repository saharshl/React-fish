import React from 'react';

class AddFish extends React.Component {
    constructor() {
        super();
        this.state = {name:'',price:'',status:'',desc:'',image:''};
    }

    handleChange = (e)=>{
        e.preventDefault();
        let target= e.target;
        let name = target.name;
        let value = target.value;

        this.setState({[name]:value});

    }
    fishAdd = (e) => {
        e.preventDefault();
        let fish = {
            name: this.state.name,
            price: parseFloat(this.state.price),
            status: this.state.status,
            desc: this.state.desc,
            image: this.state.image
        };
        console.log(this.state.status);
        this.props.addFish(fish);
        e.currentTarget.reset();
    }
    render() {
        return (
            <form className="fish" onSubmit={this.fishAdd}>
            <input type="text" name="name" placeholder="Enter Name" required onChange={this.handleChange} />
            <input type="text" name="price" placeholder="Enter price" required onChange={this.handleChange} />
            <select name="status" onChange={this.handleChange}>
                <option>Select One</option>
                <option value="available">Fresh</option>
                <option value="unavailable">Sold</option>
            </select>
                <textarea name="desc" placeholder="Enter Desc" onChange={this.handleChange}></textarea>
                <input type="text" name="image" placeholder="Image" onChange={this.handleChange} />
                <button type="submit">Add Fish</button>
                </form>

        )
    }
}

export default AddFish;