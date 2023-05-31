import { AiOutlineMail } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';

import { Link } from 'react-router-dom';
import './Authen.scss';

function Login() {
    return (
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
                        <Link className="link" to="/forgot-password">
                            Forgot Password
                        </Link>
                    </div>
                    <button>Login</button>
                    <div className="register-link">
                        <p>
                            Don't you have an account?
                            <Link className="link" to="/register">
                                Register Now
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;
