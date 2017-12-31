import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';
import { withRouter } from 'react-router-dom'
import {getVisibleTodos} from '../reducers/index';



const mapStateToProps = (state, {match}) => {
  return {
    todos: getVisibleTodos(state, match.params.filter || 'all'),
  };
};



const VisibleTodoList = withRouter (connect(
  mapStateToProps,
  { onTodoClick : toggleTodo}
)(TodoList));

export default VisibleTodoList;
