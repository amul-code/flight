import React, { Component } from 'react';

import { Link } from 'react-router-dom';
//import {BrowserRouter as Router ,Switch, Route } from 'react-router-dom';

class Details extends Component{
    
    render(){
        return(
            <div>
                <h1>details</h1>
                <ul>
                    
                <li></li><Link to='/UserDetails'>
                        <button>Book now</button></Link><br/>
                <li></li><Link to='/UserDetails'>
                        <button>Book now</button></Link><br/>
                <li></li><Link to='/UserDetails'>
                        <button>Book now</button></Link><br/>
                <li></li><Link to='/UserDetails'>
                        <button>Book now</button></Link><br/>


                </ul>
            </div>
        );
    }}
     
 
    
export default Details