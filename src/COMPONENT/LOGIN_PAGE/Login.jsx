import './Login.css';
import ctalogoOne from '../../Images/hotstar_imges/cta-logo-one.svg'
import ctalogoTwo from '../../Images/hotstar_imges/cta-logo-two.png'
const Login = () => {
    return (
        <>
            <section className='login-container'>
                <div className='login-content login-bg-img'>
                    <div className='login-card'>
                        <img className='ctalogoOne' src={ctalogoOne} alt="" />
                        <a className='login-ancer' href="#/">GET ALL THERE</a>
                        <p> Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.</p>
            <img className='ctalogoTwo ' src={ctalogoTwo} alt="" />
                    </div>
                </div>
            </section>

        </>
    )
}
export default Login;