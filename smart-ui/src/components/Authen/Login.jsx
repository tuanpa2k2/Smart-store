import { AiOutlineMail } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';

import './Login.scss';

function Login({ setShowLogin }) {
    return (
        // <div className="abcdef">
        // </div>
        <section>
            <div className="login-box">
                <form action="">
                    <h2>Login Account</h2>
                    <div className="input-box">
                        <span className="icon">
                            <AiOutlineMail />
                        </span>
                        <input type="email" required />
                        <label>Email</label>
                    </div>

                    <div className="input-box">
                        <span className="icon">
                            <BiLockAlt />
                        </span>
                        <input name="password" type="password" required />
                        <label>Password</label>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#">For got password</a>
                    </div>
                    <button>Login</button>
                    <div className="register-link">
                        <p>
                            Don't have an account?<a href="#">Register now</a>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;
