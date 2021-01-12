import React from 'react';
import VideoItem from './VideoItem';
    const VideoList =({listofVideos,onSelectedVideo})=>{
        
             const renderedList = listofVideos.map(video =>{
               
                return <VideoItem 
                         key={video.id.videoId} 
                         video={video} 
                         onSelectedVideo={onSelectedVideo}
                      
                         />
                        
                       });

             return(
                 <div className="image-list">
                     {renderedList}
                     </div>
             );
}
export default VideoList;