import React from 'react';

function Login(props) {
    return (
        <nav className='login'>
        <h3>Inventory Login</h3>
        <button className='facebook' onClick={()=> props.authenticate('Facebook')}>Log In Using Facebook</button>
        </nav>
    );
}

export default Login;