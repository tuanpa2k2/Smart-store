import { AiOutlineMail } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';

import './Authen.scss';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <section>
            <div className="login-box">
                <form action="">
                    <h2>Register Account</h2>
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
                    <div className="input-box">
                        <span className="icon">
                            <RiLockPasswordLine />
                        </span>
                        <input name="password" type="password" required />
                        <label>Confirm Password</label>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                    </div>
                    <button>Register</button>
                    <div className="register-link">
                        <p>
                            You have an account?
                            <Link className="link" to="/login">
                                Login Now
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Register;
