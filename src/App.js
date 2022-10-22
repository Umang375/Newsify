import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import { 
  Routes, 
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=6;
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route path="general" element={<News setProgress={this.setProgress}key='general' pagesize = {this.pageSize} country="in" category="general"/>} />
            <Route path="business" element = {<News setProgress={this.setProgress}key="business" pagesize = {this.pageSize} country="in" category="business"/>} />
            <Route path="entertainment" element = {<News setProgress={this.setProgress}key="entertainment" pagesize = {this.pageSize} country="in" category="entertainment"/>} />
            <Route path="health" element = {<News setProgress={this.setProgress}key="health" pagesize = {this.pageSize} country="in" category="health"/>} />
            <Route path="science" element = {<News setProgress={this.setProgress}key="science" pagesize = {this.pageSize} country="in" category="science"/>} />
            <Route path="sports" element = {<News setProgress={this.setProgress}key="sports" pagesize = {this.pageSize} country="in" category="sports"/>} />
            <Route path="technology" element = {<News setProgress={this.setProgress}key="technology" pagesize = {this.pageSize} country="in" category="technology"/>} />
      </Routes>
        </div>
    )
  }
}



