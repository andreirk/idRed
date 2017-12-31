import React from 'react';
import PropTypes from 'prop-types';
import App from "./App";
import {Provider} from "react-redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



const Root = ({ store }) => (
  <Provider store={store}>
   <Router>
     <div>
       <Route exact path="/:filter?" component={App}/>
       {/*<Route path="/about" render={() => <h1>About</h1> }/>*/}
       <Route path="/about" children={({match}) => match &&  <h1>About</h1> }/>
     </div>
   </Router>

  </Provider>
);


Root.propTypes = {
  store: PropTypes.object.isRequired,
};
Root.defaultProps = {};

export default Root;
