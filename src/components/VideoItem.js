import './VideoItem.css';
const VideoItem = ({video, id,onVideoSelect}) => {
    return ( 
        <div onClick={() => onVideoSelect(video)} className="video-item item" key={id}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="" />
            <div className="content">
                <div className="header">
                {video.snippet.title}
                </div>
            </div>
        </div>
     );
}   
 
export default VideoItem;