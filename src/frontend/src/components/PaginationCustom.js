import React from 'react';
import JwPagination from 'jw-react-pagination';
import {useEffect, useState} from 'react';



class PaginationCustom extends React.Component {
  
    constructor(props) {
        super(props);

        // an example array of items to be paged
        var exampleItems = [];

        // bind the onChangePage method to this React component
        this.onChangePage = this.onChangePage.bind(this);

        // store example items and current page of items in local state
        this.state = {
            exampleItems,
            pageOfItems: []
        };
    }

    onChangePage(pageOfItems) {
        // update local state with new page of items
        this.setState({ pageOfItems });
    }

    render() {
        
        return (
            <div>
                <h1>React - Pagination Example with logic like Google</h1>
                {this.state.pageOfItems.map(item =>
                    <div key={item.id}>{item.displayName}</div>
                )}
                <JwPagination items={this.props.users} onChangePage={this.onChangePage} />
            </div>
        );
    }
}

export default PaginationCustom;