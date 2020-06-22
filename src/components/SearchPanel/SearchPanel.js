import React, {Component} from 'react';

class SearchPanel extends Component{

    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e) {
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
