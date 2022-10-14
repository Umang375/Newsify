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
            progress={this.state.progress}
          />
          <Routes>
            <Route path="general" element={<News key='general' pagesize = {this.pageSize} country="in" category="general"/>} />
            <Route path="business" element = {<News key="business" pagesize = {this.pageSize} country="in" category="business"/>} />
            <Route path="entertainment" element = {<News key="entertainment" pagesize = {this.pageSize} country="in" category="entertainment"/>} />
            <Route path="health" element = {<News key="health" pagesize = {this.pageSize} country="in" category="health"/>} />
            <Route path="science" element = {<News key="science" pagesize = {this.pageSize} country="in" category="science"/>} />
            <Route path="sports" element = {<News key="sports" pagesize = {this.pageSize} country="in" category="sports"/>} />
            <Route path="technology" element = {<News key="technology" pagesize = {this.pageSize} country="in" category="technology"/>} />
      </Routes>
        </div>
    )
  }
}



