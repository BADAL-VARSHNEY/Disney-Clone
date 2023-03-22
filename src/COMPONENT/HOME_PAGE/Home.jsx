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
import { selectRecommend, setMovies, } from "../../Features/Movie/MovieSlice";
import { selectUserName } from '../../Features/User/UserSlice';
import { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
const override = {
    display: "block",
    margin: "300px auto",
};

const Home = () => {
    let [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const movies = useSelector(selectRecommend);

    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {

        fb.collection("movies").onSnapshot((snapshot) => {
            console.log(recommends)
            snapshot.docs.map((doc) => {
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


    }, [userName]);
    console.log(movies)
    useEffect(() => {
        (movies?.length > 0) ? setLoading(false) : setLoading(true)
    }, [movies])
    return (
        <>
            {
                loading ? <FadeLoader
                    loading={true}
                    color={'#fff'}
                    cssOverride={override}
                    size={150}
                /> :
                    <main className="home-container">
                        <ImgSlider />
                        <Viewers />
                        <Recommends />
                        <NewDisney />
                        <Originals />
                        <Trending />
                    </main>
            }
        </>
    )
}

export default Home;