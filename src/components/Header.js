import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h3>expensify</h3>
        <NavLink to="/" activeClassName="is-active" exact={true}> Home </NavLink> 
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    </header>
);

export default Header; 