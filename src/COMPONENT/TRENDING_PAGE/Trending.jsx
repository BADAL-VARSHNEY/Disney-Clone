import { Link } from 'react-router-dom';
import '../RECOMMENDS_PAGE/Recommendes';
import { useSelector } from 'react-redux';
import {selectTrending} from '../../Features/Movie/MovieSlice'

const Trending =()=>{
    const movies = useSelector(selectTrending);

    return(
        <>
        <div className='real-container'>
        <h4>Trending</h4>
        <div className='real-content'>
            {movies && movies.map((movie, key)=> (
                <div className='real-wrap' key={key}>
                {movie.id}
                <Link to={`/detail/` + movie.id}>
                    <img src={movie.cardImg} alt={movie.title} />
                </Link>
                </div> 
            ))}
            </div>
        </div>
        </>
    )
}

export default Trending;