import { connect } from 'react-redux';
import * as actions from '../actions';
import TodoList from './TodoList';
import { withRouter } from 'react-router-dom'
import {getVisibleTodos} from '../reducers/index';

import React, {Component} from 'react';
import PropTypes from 'prop-types';


class VisibleTodoList extends Component {

  componentDidMount(){
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if(this.props.filter !== prevProps.filter){
      this.fetchData();
    }
  }

  fetchData(){
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }


  render() {
    const { toggleTodo, ...rest } = this.props;
    return (
      <TodoList
        {...rest}
        onTodoClick={toggleTodo}
      />
    );
  }
}

VisibleTodoList.propTypes = {};
VisibleTodoList.defaultProps = {};



const mapStateToProps = (state, {match}) => {
  const filter = match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter,
  };
};



VisibleTodoList = withRouter (connect(
  mapStateToProps,
  actions
)(VisibleTodoList));

export default VisibleTodoList;
