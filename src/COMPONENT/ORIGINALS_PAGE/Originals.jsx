import { Link } from 'react-router-dom';
import '../RECOMMENDS_PAGE/Recommendes';
import { useSelector } from 'react-redux';
import {selectOriginal} from '../../Features/Movie/MovieSlice'

const Originals =()=>{
    const movies = useSelector(selectOriginal);

    return(
        <>
        <div className='real-container'>
          <h4>Originals</h4>
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

export default Originals;