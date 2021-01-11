import React from 'react';
import Playlist from './Playlist';

class DefaultDetail extends React.Component{

    constructor(props)
{
    super(props);
    this.state={
    playlistTitle1:'',
    playlistTitle2:'',
    playlistDescription1:'',
    playlistDescription2:'',
    playlistTitle3:'',
    playlistDescription3:'',
    startURL:'https://www.youtube.com/embed/playlist?list=',
   url:''
    }
    
}

setOptions =(response)=>{
 
    const firstItem =this.state.startURL.concat(response.data.items[12].id);
    const secondItem =this.state.startURL.concat(response.data.items[13].id);
    const thirdItem =this.state.startURL.concat(response.data.items[17].id);
// basicURl + path to playlist and after that push it to the array, after that data will be read from state of component
//console.log(secondItem);
    const array = [firstItem,secondItem,thirdItem];


      this.setState({
            playlistTitle1:response.data.items[12].snippet.title,
            playlistDescription1:response.data.items[12].snippet.description,
            playlistTitle2:response.data.items[13].snippet.title,
            playlistDescription2:response.data.items[13].snippet.description,
            playlistTitle3:response.data.items[17].snippet.title,
            playlistDescription3:response.data.items[17].snippet.description,
            url:array 
      });
           // console.log(this.state.url);
  }

       
    render(){
        return(
            <div  className="playlist-container">
                <Playlist title={this.state.playlistTitle1} url={this.state.url[0]} description={this.state.playlistDescription1} setOptions={this.setOptions} />
                <Playlist title={this.state.playlistTitle2} url={this.state.url[1]} description={this.state.playlistDescription2} setOptions={this.setOptions} />
                <Playlist title={this.state.playlistTitle2} url={this.state.url[2]} description={this.state.playlistDescription2} setOptions={this.setOptions} />
           
             </div>
        );
    }
}
export default DefaultDetail;
