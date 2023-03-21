import { useSelector } from "react-redux";
import { selectvideo } from "../../Features/User/UserSlice";
import './Video.css'
const Videos = () => {
    const imgbg = useSelector(selectvideo)
    return (
        <>
            <iframe className="video-container" src={imgbg}>
            </iframe>
        </>
    )
}

export default Videos;