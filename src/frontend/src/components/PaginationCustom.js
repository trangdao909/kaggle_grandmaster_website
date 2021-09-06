import React from 'react';
import JwPagination from 'jw-react-pagination';
import {useEffect, useState} from 'react';
import {UserTile} from '../components/UserTile';



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
            <React.Fragment>
                {this.state.pageOfItems.map(user =>
                    <UserTile key={user.id} id = {user.id}  userName={user.displayName} userRank={user.currentRanking} />
                )}
                <JwPagination items={this.props.users} onChangePage={this.onChangePage}/>
            </ React.Fragment>
        );
    }
}

export default PaginationCustom;