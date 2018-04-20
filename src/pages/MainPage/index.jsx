import React from 'react';
import {connect} from "react-redux";
import {Map} from 'immutable';
import {bindActionCreators} from "redux";

import {ListService} from '../../serivces';

import {ListCollections} from './components';

import * as actions from '../../actions';
import {AddList} from "./components/AddList/index";

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: ''
        };
        this.listService = new ListService();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        // this.listService.addNewListItem({name: "WojtekK", owner: 1});
        this.listService.getListCollection()
            .then(resp => this.props.getListSuccessAction(resp))
            .catch(e => this.props.getListFailuerAction());

    }

    handleSubmit(e){
        e.preventDefault();
        this.listService.addNewListItem({name:this.state.name, owner: 1})
            .then(resp => actions.addNewListSuccessAction({resp: {name:this.state.name, owner: 1}}));
    }

    handleInput(e){
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <div>
                <AddList
                    name={this.state.name}
                    inputHandler={this.handleInput}
                    submitHandler={this.handleSubmit}
                />
                <ListCollections
                    list={this.props.lists.list}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, local) => {
    return {lists: state.lists, ...local};
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

const MainContainerPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);
export {MainContainerPage}