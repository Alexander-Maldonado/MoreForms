import React, {useState} from 'react';

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); 
    
    const createUser = (e) => {
        e.preventDefault();

        const newUser = { 
            username, 
            email, 
            password,
            confirmPassword 
        };
        console.log("Welcome", newUser);
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasBeenSubmitted( true );
    };


    const formMessage = () => {
        if( hasBeenSubmitted ) {
	return "Thank you for submitting the form!";
	} else {
	return "Welcome, please submit the form";
	}
    };
    
    return(
    <div>
        
        <form onSubmit={ createUser }>
            <h2>{formMessage}</h2>
            <div>
                <label>Username: </label> 
                <input type="text" value={username} onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <div>
            <h3>Your Form Data</h3>
            <p>
                <label>Username: {username}</label>
            </p>
            <p>
                <label>Email: {email}</label>
            </p>
            <p>
                <label>Password: {password}</label>
            </p>
            <p>
                <label>confirmed Password: {confirmPassword}</label>
            </p>
        </div>
    </div>
    );
};
export default UserForm;