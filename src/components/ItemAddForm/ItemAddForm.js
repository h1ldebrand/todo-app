import React, {Component} from 'react';
import './ItemAddForm.css';

class ItemAddForm extends Component {


    constructor(props) {
        super(props);

        this.state = {
            label: ''
        }

        this.onLabelChange = this.onLabelChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onLabelChange(e) {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        })
    }

    render() {
        const {label} = this.state;
        return (
            <form
                className="itemAddForm d-flex"
                onSubmit={this.onSubmit}
            >
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done"
                       value={label}
                />
                <button className="btn btn-outline-secondary">Add todo</button>
            </form>
        );
    }
}


export default ItemAddForm;
