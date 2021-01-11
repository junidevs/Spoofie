import React from 'react';
import DefaultDetail from './DefaultDetail';
import './VideoItem.css';


        const VideoDetail =({video})=>{
            if(!video)
                {
                    return <DefaultDetail />
                }
            const URL =`https://www.youtube.com/embed/${video.id.videoId}`;
        return(
            <div >
                <div className="ui embed">
                    <iframe allowFullScreen title="videoPlayer" src={URL} >

                    </iframe>
                </div>
                 <div className="ui segment video-description-box">
                  <h4 className="ui header video-title">{video.snippet.title}</h4>
                  <h5 className="ui header video-description">{video.snippet.description}</h5>
                 </div>
            </div>
            );
        
}

export default VideoDetail;