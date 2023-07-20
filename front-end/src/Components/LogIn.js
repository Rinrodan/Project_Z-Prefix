
import styles from '../App.css'

const LogIn = () => {
    return (
        <form className='logInContainer'>
            <div className='logIn shadowSmall'>
            <input 
                type="text" 
                className='inputUserName shadowSmall'
                placeholder='User Name'>
            </input>
            <input 
                type="password" 
                className='inputUserPassword shadowSmall'
                placeholder='Password'>
            </input>
            <button className='button shadowSmall'>Log in</button>
            </div>
        </form>
    )
}
export default LogIn;