import React, {ChangeEvent, Component} from 'react';

interface IProps {
    onSearch: (text: string) => void
}

interface IState {}

class SearchPanel extends Component<IProps, IState>{

    constructor(props: Readonly<IProps>) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e: ChangeEvent<HTMLInputElement>) {
        this.props.onSearch(e.target.value);
    }


    render() {

        return(
            <input
                type="text"
                placeholder="search"
                className="form-control searchInput"
                onChange={this.handleSearch}
            />
        )
    }

}

export default SearchPanel;
