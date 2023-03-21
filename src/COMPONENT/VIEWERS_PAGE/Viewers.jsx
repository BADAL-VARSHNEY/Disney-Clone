import './Viewers.css'
import disney from '../../Images/hotstar_imges/viewers-disney.png'
import pixar from '../../Images/hotstar_imges/viewers-pixar.png'
import marvel from '../../Images/hotstar_imges/viewers-marvel.png'
import starwars from '../../Images/hotstar_imges/viewers-starwars.png'
import national from '../../Images/hotstar_imges/viewers-national.png'

import dis from '../../Videos/hotstar_videos/1564674844-disney.mp4';
import nat from '../../Videos/hotstar_videos/1564676296-national-geographic.mp4';
import marl from '../../Videos/hotstar_videos/1564676115-marvel.mp4';
import pix from '../../Videos/hotstar_videos/1564676714-pixar.mp4';
import star from '../../Videos/hotstar_videos/1608229455-star-wars.mp4';

const Viewers = () =>{
    return(
        <>
            <div className='view-container'>
                <div className='view-wrap'>
                    <img src={disney} alt="" />
                    <video  autoPlay loop playsInline={true} muted>
                        <source src={dis} type="video/mp4"/>
                    </video>
                </div>
                <div className='view-wrap'>
                    <img src={pixar} alt="" />
                    <video autoPlay loop playsInline={true} muted>
                        <source src={pix}type="video/mp4"/>
                    </video>
                </div>
                <div className='view-wrap'>
                    <img src={marvel} alt="" />
                    <video autoPlay loop playsInline={true} muted>
                        <source src={marl} type="video/mp4"/>
                    </video>
                </div>
                <div className='view-wrap'>
                    <img src={starwars} alt="" />
                    <video autoPlay loop playsInline={true} muted>
                        <source src={star} type="video/mp4"/>
                    </video>
                </div>
                <div className='view-wrap'>
                    <img src={national} alt="" />
                    <video autoPlay loop playsInline={true} muted>
                        <source src={nat} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </>
    )
}
export default Viewers;