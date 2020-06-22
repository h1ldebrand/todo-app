import React, {Component} from 'react';
import './ItemStatusFilter.css';

interface IProps {
    setFilter: (filter: string) => void
    isActive: string
}

interface IState {}

interface IButtons{
    name: "all" | "active" | "done"
    label: "All" | "Active" | "Done"
}

export default class ItemStatusFilter extends Component<IProps, IState>{

    render() {

        const {isActive, setFilter} = this.props;

        const buttons: Array<IButtons> = [
            {name: "all", label: "All"},
            {name: "active", label: "Active"},
            {name: "done", label: "Done"},
        ];

        return (
            <div className="btn-group">
                {
                    buttons.map(button => {
                        const btnClass = (isActive === button.name) ? "btn-info" : "btn-outline-secondary";

                        return (
                            <button
                                type="button"
                                className={`btn ${btnClass}`}
                                onClick={() => setFilter(button.name)}
                                key={button.name}
                            >{button.label}
                            </button>
                        )
                    })
                }
            </div>
        );
    };
}
