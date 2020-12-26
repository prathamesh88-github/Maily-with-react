
import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


import {BrowserRouter,Route} from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';





class App extends Component
{
    componentDidMount(){
        this.props.fetchUser();

    }
    render(){
    return(
   
       <BrowserRouter>
       <div className="container">
           <Header/>
           <Route exact={true} path="/" component={Landing } />
           <Route exact={true} path="/surveys" component={Dashboard } />  
           <Route exact={true} path="/surveys/new" component={SurveyNew } />  
          
            
       </div>
       </BrowserRouter>
    );

}
}
export default connect(null,actions)(App);