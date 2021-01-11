import React from 'react';
import './VideoItem.css';

const VideoItem =({video,onSelectedVideo})=>{
  
    return(
        <div onClick={()=>onSelectedVideo(video)} className="video-item item item-background">
            <img
            className="ui image image-color"
             src={video.snippet.thumbnails.medium.url}
             alt={video.snippet.title}
             />
             <div className="content">
                <div className="header header-color">{video.snippet.title}</div> 
            </div>
        </div>
    );
}
export default VideoItem;