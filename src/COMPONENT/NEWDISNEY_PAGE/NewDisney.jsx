import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectNewDisney} from '../../Features/Movie/MovieSlice'
import '../RECOMMENDS_PAGE/Recommendes';


const NewDisney =()=>{
    const movies = useSelector(selectNewDisney);
    return(
        <>
        <div className='real-container'>
        <h4>New to Disney+</h4>
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

export default NewDisney;