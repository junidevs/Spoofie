import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './api/Youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import Header from './components/Header';
import backgroundPhoto from './components/background.png';
import './components/VideoItem.css';


class App extends React.Component{
    state ={
        videos:[],
        selectedVideo:null,
        error:null
    }

    onTermSubmit =async term=>{
      await youtube.get('/search',{
            params:{
                q:term
            }
        })
        .then(response =>
            this.setState({
                videos:response.data.items,
                selectedVideo:response.data.items[0]
                })
        )
        .catch( 
           
            (error) => { 
            this.setState({error:error});
            //console.log(this.state.error);
         }
        );
           
      
    }
        
    onSelectedVideo=(video)=>{
         this.setState({selectedVideo:video});
    }

    render(){
    
        
            if (this.state.error)  
          {
           
            return (
                <div className="error">
                  
                <h1 >Something went wrong :( </h1>
                <h5>please check your network connection or correct URL </h5>
                </div> 
                    );    
            }
        return(
            <div className="container">
            <div id="containerApp" className="containerApp" style={{backgroundImage: `url(${backgroundPhoto})`}}>
                  </div>
                <Header />
                     <SearchBar
                      onFormSubmit={this.onTermSubmit}  
                       />
              
                     <div id="videoContainer" className="video-container">
                       
                        <div className="video-details">
                             <VideoDetail
                                video={this.state.selectedVideo}
                               />
                         </div>
                     
                       <div className="video-list">
                            <VideoList
                                onSelectedVideo={this.onSelectedVideo}
                                 listofVideos={this.state.videos}
                            />
                      </div>
                      
                      </div>
              
                
            </div>
        );
    }
}
export default App;

