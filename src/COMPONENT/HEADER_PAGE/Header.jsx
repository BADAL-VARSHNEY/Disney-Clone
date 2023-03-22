import './Header.css';
import logo from '../../Images/hotstar_imges/logo.svg';
import homeicon from '../../Images/hotstar_imges/home-icon.svg'
import searchicon from '../../Images/hotstar_imges/search-icon.svg'
import watchlisticon from '../../Images/hotstar_imges/watchlist-icon.svg'
import originalicon from '../../Images/hotstar_imges/original-icon.svg'
import movieicon from '../../Images/hotstar_imges/movie-icon.svg'
import seriesicon from '../../Images/hotstar_imges/series-icon.svg'
import { auth, provider } from '../FIREBASE/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState,
} from "../../Features/User/UserSlice";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const username = useSelector(selectUserName)
    const userphoto = useSelector(selectUserPhoto)
console.log(userphoto, 12)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                navigate("/home");
            }
        });
    }, [username])


    const handleAuth = () => {
        if (!username) {
            auth.signInWithPopup(provider)
                .then((result) => {
                    setUser(result.user);
                })
                .catch((errer) => {
                    alert(errer.message);
                })
        } else if (username) {
            auth.signOut()
                .then(() => {
                    dispatch(setSignOutState());
                        navigate("/");
                })
                .catch((err) => alert(err.message));
        }
    };



    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        )
    }

    return (
        <>
            <nav>
                <a className='header-logo' href="#/">
                    <img src={logo} alt="logo" />
                </a>
                {
                    !username ? (<a className='header-login' onClick={handleAuth} href="#/">Login</a>
                    ) : (<>
                        <div className='NavMenu'>
                            <a href="/home">
                                <img src={homeicon} alt="" />
                                <span>HOME</span>
                            </a>
                            <a>
                                <img src={searchicon} alt="" />
                                <span>SEARCH</span>
                            </a>
                            <a>
                                <img src={watchlisticon} alt="" />
                                <span>WATCHLIST</span>
                            </a>
                            <a>
                                <img src={originalicon} alt="" />
                                <span>ORIGINALS</span>
                            </a>
                            <a>
                                <img src={movieicon} alt="" />
                                <span>MOVIES</span>
                            </a>
                            <a>
                                <img src={seriesicon} alt="" />
                                <span>SERIES</span>
                            </a>
                        </div>
                        <div className='header-Signout'>
                            <img className='userimages' src={userphoto} alt={username} />
                            <div className='header-dropdown'>
                                <span onClick={handleAuth}>Sign out</span>
                            </div>
                        </div>
                    </>
                    )}
            </nav>
        </>
    )
};

export default Header;