import ImgSlider from '../IMG_SLIDER_PAGE/ImgSlider';
import NewDisney from '../NEWDISNEY_PAGE/NewDisney';
import Originals from '../ORIGINALS_PAGE/Originals';
import Recommends from '../RECOMMENDS_PAGE/Recommendes';
import Trending from '../TRENDING_PAGE/Trending';
import Viewers from '../VIEWERS_PAGE/Viewers';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import fb from '../FIREBASE/Firebase';
import { selectmovimgLoading, setMovies, stLoading } from "../../Features/Movie/MovieSlice";
import { selectUserName } from '../../Features/User/UserSlice';
import Spinner from 'react-spinkit'


const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const loading = useSelector(selectmovimgLoading);
    console.log(loading)
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];
    
    useEffect(() => {
        console.log("hello");
        dispatch(stLoading(true))
        
        fb.collection("movies").onSnapshot((snapshot) => {
            console.log(recommends)
            snapshot.docs.map((doc) => {
                console.log("Badal") ;
                switch (doc.data().type) {
                    case "recommend":
                        recommends = [...recommends, { id: doc.id, ...doc.data() }];
                        break;

                    case "new":
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                        break;

                    case "original":
                        originals = [...originals, { id: doc.id, ...doc.data() }];
                        break;

                    case "trending":
                        trending = [...trending, { id: doc.id, ...doc.data() }];
                        break;
                }
            });
            dispatch(
                setMovies({
                    recommend: recommends,
                    newDisney: newDisneys,
                    original: originals,
                    trending: trending,
                })
            );
        });
        
        dispatch(stLoading(false))

    }, [userName]);
    if (loading) {
        alert('loading')

        return (
          <div className='loading_app'>
            <div className='loading_spin'>
              
              <img className='Logo_App'  
                src='https://img.freepik.com/premium-vector/initial-dr-letter-logo-with-script-typography-vector-template-creative-script-letter-dr-logo-design_616200-715.jpg' alt='Devi restarent'/>
           
              <Spinner
                name='pacman'
                color='green'
                fadeIn='none'
    
              />
    
            </div>
          </div>
        )
      }
    return (
        <>
            <main className="home-container">
                <ImgSlider />
                <Viewers />
                <Recommends />
                <NewDisney />
                <Originals />
                <Trending />
            </main>
        </>
    )
}

export default Home;