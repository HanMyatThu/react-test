import React, { Component } from 'react';
import Project from './Projects'
import SocialProfiles from './SocialProfiles'
import profile from './assets/profile.png'
// class  RegularClass {}
// class ComponentClass extends Component{}

// const RegularClassInstance = new RegularClass();
// const ComponentClassInstance = new ComponentClass();

// console.log(RegularClassInstance)
// console.log(ComponentClassInstance)

class App extends Component{
    state = { displayBio:false }
    // eg for this.sate.text = this.state.text + 'blah'
    // we use like , this.setState({text = this.state.text + ''})
    // cuz react uses render . setState    works before render methods
    

    // never modify state directly in react
    toggleDisplayBio = () =>{
        this.setState({displayBio: !this.state.displayBio})
    }

    render() {
        
        return(
            <div>
                <img src={profile} alt='my profile'className='profile'></img>
                <h1>Hello!</h1>
                <p>My Name is Es . I am a software Enginner</p>
                <p>I'm always looking forward to learn new knowledge.</p>
             
                    {/*
                        if(this.state.displayBio){
                            <div></div>
                        }else{
                            onclick
                        }
                    */}
                {
                    this.state.displayBio? (
                        <div>
                        <p>I live in blah blah</p>
                        <p>My favourite language is java script. I think react js is awsome</p>
                        <p>Beside coiding, i also love to play games.</p>
                        <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                        ) :  (
                            <div>
                                <button onClick={this.toggleDisplayBio}>Read More</button>
                               
                            </div>
                        )
                }
               <hr></hr>
               <Project></Project>
               <hr></hr>
               <SocialProfiles></SocialProfiles>
            </div>
         
        )
    }
}

export default App; 