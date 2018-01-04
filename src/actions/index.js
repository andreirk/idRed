import v4 from 'uuid/v4';
import * as api from '../api'

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: v4(),
    text,
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};


const receiveTodos = (filter, response) => {
  return {
    type: 'RECEIVE_TODOS',
    filter,
    response,
  }
}


export const fetchTodos = (filter) => {
  return api.fetchTodos(filter)
    .then(response =>
      receiveTodos(filter, response)
    )
}