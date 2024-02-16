import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
// import Greet from './components/Greet';

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      progress: 30,
      mode : 'light'
    }
  }

  toggleMode = ()=>{
    if(this.state.mode === 'light'){
      this.setState({
        mode : 'dark'
      })
      document.body.style.backgroundColor = 'black'
    }
    else{
      this.setState({
        mode : 'light'
      })
      document.body.style.backgroundColor = 'white'
    }
  }

  searchNews = ()=>{
    let news = document.getElementById('searchBox').value.toUpperCase();
    let newsCol = document.getElementsByClassName('col-md-3')
    for(let i=0; i<newsCol.length; i++){
      let title = newsCol[i].getElementsByTagName('h5')[0].innerText.toUpperCase();
      console.log(title);
      if(title){
        if(title.indexOf(news)>-1){
          newsCol[i].style.display = ''
        }
        else{
          newsCol[i].style.display = 'none'
        }
      }
    }
  }

 setProgress = (progress)=>{
    this.setState({progress : progress})
  }

  apiKey = process.env.REACT_APP_MY_NEWS_API

  render() {
    return (
      <div>
        <Router>
          <LoadingBar color='#f11946' height={2} progress={this.state.progress} />
          <Navbar title="NewsVerse" toggleMode = {this.toggleMode} mode = {this.state.mode} searchNews={this.searchNews}/>
          {/* <Greet/> */}
          <Routes>
            <Route exact path='/' element={<News key="home" mode = {this.state.mode} apiKey={this.apiKey} setProgress={this.setProgress} country="in" category="general" imageUrl="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />} />
            <Route exact path='/business' element={<News key="business" mode = {this.state.mode} apiKey={this.apiKey} setProgress={this.setProgress} country="in" category="business" imageUrl="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />} />
            <Route exact path='/entertainment' element={<News key="entertainment" mode = {this.state.mode} apiKey={this.apiKey} setProgress={this.setProgress} country="in" category="entertainment" imageUrl="https://images.unsplash.com/photo-1510511233900-1982d92bd835?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />} />
            <Route exact path='/health' element={<News key="health" mode = {this.state.mode} apiKey={this.apiKey} setProgress={this.setProgress} country="in" category="health" imageUrl="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />} />
            <Route exact path='/science' element={<News key="science" mode = {this.state.mode} apiKey={this.apiKey} setProgress={this.setProgress} country="in" category="science" imageUrl="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />} />
            <Route exact path='/sports' element={<News key="sports" mode = {this.state.mode} apiKey={this.apiKey} setProgress={this.setProgress} country="in" category="sports" imageUrl="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />} />
            <Route exact path='/technology' element={<News key="technology" mode = {this.state.mode} apiKey={this.apiKey} setProgress={this.setProgress} country="in" category="technology" imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
