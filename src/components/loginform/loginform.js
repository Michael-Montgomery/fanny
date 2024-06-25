import { useState } from 'react';
import './loginform.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function LoginForm() {

    const [hidePassword, setHidePassword] = useState(true);


    return (
        <div id='login-form-wrapper'>
            <form>
                <h2>Login to View the Patient Portal</h2>
                <input type='email' placeholder='email'></input><br></br>
                <input type={hidePassword ? 'password' : 'text'} placeholder='Password'></input> <button onClick={(e) => {e.preventDefault(); setHidePassword(!hidePassword)}} id='show-password-btn'>{hidePassword ? <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> : <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>}</button><br></br>
                <button id='login-btn'>Login</button>
            </form>
        </div>

    )
}

export default LoginForm;