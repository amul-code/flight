import React, { Component } from 'react';

import { Link } from 'react-router-dom';
//import {BrowserRouter as Router ,Switch, Route } from 'react-router-dom';

class UserDetails extends Component{
    
    render(){
        return(
            <div>
                <h1>Personal info</h1>
                <form>
                <label htmlFor="name">Name:</label><br/>
                        <input type="text" id="name"/><br/><br/>
                <label htmlFor="Email">Email:</label><br/>
                        <input type="email" id="name"/><br/><br/>
                <label htmlFor="Contact no">Contact no:</label><br/>
                        <input type="text" id="contact"/><br/><br/>
               
                <label htmlFor="seats">Seats:</label><br/>
                <input type="number" name="quantity" min="1" max="5"/> <br/><br/>       
                <Link to='confirmation'><button>Submit</button></Link>

                </form>
            </div>
        );
    }}
     
 
    
export default UserDetails