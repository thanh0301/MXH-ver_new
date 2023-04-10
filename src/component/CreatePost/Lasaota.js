import { Feeling, LiveVideo, Photo } from "../../svg";
import "./style.css";
import { useSelector } from 'react-redux';

const Lasaota = () => {

    const Account = useSelector(state => state.accountThanh.Account)
    const img1 = 'http://localhost:8080'
    return (

        <div className="createPost">
            <div className="createPost_header">
                <img src={`${img1}${Account.Avater}`} />
                <div className="open_post hover2">

                    What's on your mind, {Account?.First_Name}?
                </div>
            </div>
           
            <div className="create_splitter"></div>
            <div className="createPost_body">
                <div className="createPost_icon hover1">
                    <LiveVideo color="#f3425f" />
                    Live Video
                </div>
                <div className="createPost_icon hover1">
                    <Photo color="#4bbf67" />
                    Photo/Video
                </div>
                <div className="createPost_icon hover1">
                    <Feeling color="#f7b928" />
                    Feeling/Activity
                </div>
            </div>
        </div>
    );
}

export default Lasaota