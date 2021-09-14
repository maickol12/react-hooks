import React,{ useContext } from 'react'
import { UserContext } from './UserContext';
export const LoginScreen = () => {
    const { setUser,user } = useContext(UserContext);
    console.log(user);
    return (
        <div>
            <h1>Login Screen</h1>
            <hr />
            <button 
                className='btn btn-primary'
                onClick={ () => setUser({...user, id:user.id+1}) }>
                
            </button>
        </div>
    )
}

