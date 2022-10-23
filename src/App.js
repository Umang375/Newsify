import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import { 
  Routes, 
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize=6;
  const apikey = process.env.REACT_APP_NEWS_API;
  
  const [progress, setProgress] = useState(0);

    return (
      <div>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
          />
          <Routes>
            <Route path="general" element={<News apiKey={apikey} setProgress={setProgress}key='general' pagesize = {pageSize} country="in" category="general"/>} />
            <Route path="business" element = {<News apiKey={apikey} setProgress={setProgress}key="business" pagesize = {pageSize} country="in" category="business"/>} />
            <Route path="entertainment" element = {<News apiKey={apikey} setProgress={setProgress}key="entertainment" pagesize = {pageSize} country="in" category="entertainment"/>} />
            <Route path="health" element = {<News apiKey={apikey} setProgress={setProgress}key="health" pagesize = {pageSize} country="in" category="health"/>} />
            <Route path="science" element = {<News apiKey={apikey} setProgress={setProgress}key="science" pagesize = {pageSize} country="in" category="science"/>} />
            <Route path="sports" element = {<News apiKey={apikey} setProgress={setProgress}key="sports" pagesize = {pageSize} country="in" category="sports"/>} />
            <Route path="technology" element = {<News apiKey={apikey} setProgress={setProgress}key="technology" pagesize = {pageSize} country="in" category="technology"/>} />
      </Routes>
        </div>
    )
  }

  export default App



