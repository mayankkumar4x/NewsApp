import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
 const pageSize=5;
  
  const [progress,setProgress]=useState(0)
  // setProgress(pr)
  
    return (
      <div>
        {/* <News setProgress={setProgress} pageSize={9} category={'health'} country="in" /> */}
          {/* <Route path="/registrationStudent" element={<RegistrationStudent />} /> */}
        <BrowserRouter>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
        <NavBar />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={9} category='general' country="in" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={9} category='business' country="in" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={9} category='entertainment' country="in" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={9} category='general' country="in" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={9} category='health' country="in" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={9} category='science' country="in" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={9} category='sports' country="in" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={9} category='technology' country="in" />} />
          </Routes>
        </BrowserRouter>

      </div>
      // businessentertainmentgeneralhealthsciencesportstechnology
    )
  
}
export default App
