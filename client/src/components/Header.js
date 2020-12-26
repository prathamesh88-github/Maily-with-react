import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                return <li><a style={{textDecoration:"none"}}className="white-text" href="/auth/google">Login With Google </a></li>;
            default:
                return[
                <li key="1"><Payments/></li>,
                <li key="3" style={{margin:'0 10px'}}>
                    Credits:{this.props.auth.credits}
                </li>,
                <li key="2"><a style={{textDecoration:"none"}} href="/api/logout">Logout</a></li>
                ];

        }
    }
    render(){
       
        return(
            
                 <nav>
    <div className="nav-wrapper black">
   
        <Link 
        to={this.props.auth ? '/surveys':'/'}
        style={{margin:'0 10px',textDecoration:"none"}} className="left brand-logo white-text">
        <i  style={{margin:'0 10px'}}  class="material-icons">mail_outline</i>
        Maily</Link>
      
      <ul id="nav-mobile" className="right">
      {this.renderContent()}
      </ul>
    </div>
  </nav>
 
        );  
    }     
    
    }
    function mapStateToProps({auth}) {
        return{ auth };
}


export default connect (mapStateToProps)(Header);