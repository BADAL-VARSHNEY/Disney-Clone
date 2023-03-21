import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Recommends.css';
import {selectRecommend} from '../../Features/Movie/MovieSlice'


const Recommends =()=>{
    const movies = useSelector(selectRecommend);
    return(
        <>
        <div className='real-container'>
            <h4>Recommended for You</h4>
            <div className='real-content'>
            {movies && movies.map((movie, key)=> (
                <div className='real-wrap' key={key}>
                {movie.id}
                <Link to={'/detail/' + movie.id}>
                    <img src={movie.cardImg} alt={movie.title} />
                </Link>
                </div> 
            ))}
            <h1>Badal</h1>
            </div>
        </div>
        </>
    )
}

export default Recommends;
