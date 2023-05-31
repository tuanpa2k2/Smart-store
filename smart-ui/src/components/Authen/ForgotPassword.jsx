import { AiOutlineMail } from 'react-icons/ai';

import './Authen.scss';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    return (
        <section>
            <div className="login-box">
                <form action="">
                    <h2>Forgot Password</h2>
                    <div className="input-box">
                        <span className="icon">
                            <AiOutlineMail />
                        </span>
                        <input type="email" required />
                        <label>Email</label>
                    </div>
                    <button>Send Mail</button>
                    <div className="register-link">
                        <p>Mã code sẽ được gửi về email của bạn?</p>
                        <p>HOẶC</p>
                        <p>
                            <Link className="link" to="/login">
                                Login Now
                            </Link>
                            -
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

export default ForgotPassword;
