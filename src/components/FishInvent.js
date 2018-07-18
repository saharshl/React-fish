import React from 'react';

class FishInvent extends React.Component {
    handleChange = (event) => {
        let target = event.currentTarget;
        let name = target.name;
        const editFish = {
            ...this.props.fish,
            [name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index,editFish);
    }
    render() {
        return (
        <div className='fish-edit'>
        <input type="text" name="name" value={this.props.fish.name} onChange={this.handleChange}/>
            <input type="text" name="price" value={this.props.fish.price} onChange={this.handleChange}/>
            <select name="status" value={this.props.fish.status} onChange={this.handleChange}>
                <option>Select One</option>
                <option value="available">Fresh</option>
                <option value="unavailable">Sold</option>
            </select>
                <textarea name="desc" value={this.props.fish.desc} onChange={this.handleChange}></textarea>
                <input type="text" name="image" value={this.props.fish.image} onChange={this.handleChange}/>
                <button type="submit" onClick={() => this.props.deleteFish(this.props.index)}>Delete Fish</button>
        </div>
    );
}
}

export default FishInvent;