import React from 'react';

class SearchBar extends React.Component{
    constructor(props)
    {

        super(props);
        this.state={
                term:""
        }
    }
 
    getInputValue =(e)=>{
        this.setState({term:e.target.value});
       
    };
    //adding invisibility for main background image from App component
    onBackgroundChange=()=>{
        const searchBar = document.querySelector('#search-bar');
        const labelinput = document.querySelector('#label-input');
        const videoDetails = document.querySelector('.video-details');
        setTimeout(()=>{videoDetails.classList.add('video-details-gradient')},500);
        //.classList.add('video-details-gradient');
        labelinput.style.display="none";
        searchBar.style.marginTop="0%"
        //const image = document.querySelector('#containerApp');
        //image.style.opacity="0";
        }
        
    onFormSubmit =(e)=>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
        this.onBackgroundChange();
    }
    
    render(){
        return(
            <div id="search-bar" className="search-bar-container">
                <form  onSubmit={this.onFormSubmit}>
             
                <label id="label-input" className="label-search">Find something for you...</label>
                    <input placeholder="search..." className="search-input" type="text" value={this.state.term} onChange={this.getInputValue}></input>
              
                </form>

            </div>
        );
    }
}

export default SearchBar;

