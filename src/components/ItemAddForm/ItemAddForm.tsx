import React, {Component, ChangeEvent, FormEvent} from 'react';
import './ItemAddForm.css';

interface IProps {
    onAddItem: (data: string) => void
}

interface IState {
    label: string
}

class ItemAddForm extends Component<IProps, IState> {


    constructor(props: Readonly<IProps>) {
        super(props);

        this.state = {
            label: ''
        }

        this.onLabelChange = this.onLabelChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onLabelChange(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit(e: FormEvent) {
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
