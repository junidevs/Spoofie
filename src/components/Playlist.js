import React from 'react';
import Playlists from '../api/Playlists';

class DefaultDetail extends React.Component{

   async componentDidMount()
   {
     
    const response = await  Playlists.get('/playlists',{
        params:
        {
          channelId:"UCX0OCU1rH9loE-zZFcBJ65w",
        }})
        this.props.setOptions(response);
    }
    render(){
        return(
            <div className="playlist-square">
                    <iframe  width="500px" height="300px" title="playlist" allowFullScreen src={this.props.url}></iframe>
            </div>
        );
    }
}
export default DefaultDetail;