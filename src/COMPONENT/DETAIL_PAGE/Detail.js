import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';
import db from '../FIREBASE/Firebase';
import playIconBlack from '../../Images/hotstar_imges/play-icon-black.png';
import playIconWhite from '../../Images/hotstar_imges/play-icon-white.png';
import groupIcon from '../../Images/hotstar_imges/group-icon.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setvideo } from '../../Features/User/UserSlice';
const Detail = ()=>{

    const {id} = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(()=>{
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists) {
                setDetailData(doc.data());
            }else {
                console.log("no such document in firebase");
            }
        })
        .catch((error)=>{
            console.log("Error getting document:", error);
        });
    }, [id])
    ;

    const dispatch = useDispatch()

const handliClcik=(img)=>{
    dispatch(
        setvideo(detailData.cardvideo)
    )
}
    return(
        <>
           <div className="detail-container">
           <div className='detail-background'>
                    <img src={detailData.backgroundImg} alt={detailData.title} />
           </div>

           <div className='detail-ImageTitle'>
            <img src={detailData.titleImg} alt={detailData.title} />
           </div>
           <div className='detail-content'>
            <div className='detail-controls'>
                <button className='detail-player'>
                        <img src={playIconBlack} alt="" />
                        <span>Play</span>
                </button>
                <Link to={'/video' }  
                onClick={handliClcik}
                className='detail-player Trailer'>
                        <img src={playIconWhite} alt="" />
                        <span>Trailer</span>
                </Link>
                <div className='detail-addList'>
                    <span/>
                    <span/>
                </div>
                <div className='detail-groupWatch'>
                    <div>
                        <img src={groupIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className='detail-subTitle'>{detailData.subTitle}</div>
            <div className='detail-description'>{detailData.description}</div>
           </div>
           </div>      
        </>
    )
}

export default Detail;