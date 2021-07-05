import VideoItem from "./VideoItem";
const VideoList = ({videos,onVideoSelect}) => {
    const renderList = videos.map((video, i) => {
        return <VideoItem onVideoSelect={onVideoSelect} key={i} id={i} video={video} />
    });

    return (
        <div className="ui relaxed divided list">{renderList}</div>
    )
}
 
export default VideoList;