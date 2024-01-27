import './App.css';
import React,{useState} from 'react'
import News  from './components/News';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App=()=>{
  
  const [progress,setprogress]= useState(0);
  const apikey=process.env.REACT_APP_NEWS_API
  
    return(
      <div>
        <BrowserRouter >
        <LoadingBar
        color='#f11946'
        progree={progress}
      />
        <Navbar/>
        <Routes>
            <Route path='/' index element={<News setprogress={setprogress} apikey={apikey} key="general" pagesize={6} country="in" category="general"/>}/>
            <Route exact path="/business" element={<News setprogress={setprogress} apikey={apikey} key="business" pagesize={6} country="in" category="business" />} />
            <Route exact path="/general" element={<News setprogress={setprogress} apikey={apikey} key="general" pagesize={6} country="in" category="general" />} />
            <Route exact path="/sports" element={<News setprogress={setprogress} apikey={apikey} key="sports" pagesize={6} country="in" category="sports" />} />
            <Route exact path="/entertainment" element={<News setprogress={setprogress} apikey={apikey} key="entertainment" pagesize={6} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News setprogress={setprogress} apikey={apikey} key="health" pagesize={6} country="in" category="health" />} />
            <Route exact path="/science" element={<News setprogress={setprogress} apikey={apikey} key="science" pagesize={6} country="in" category="science" />} />
            <Route exact path="/technology" element={<News setprogress={setprogress} apikey={apikey} key="Technology" pagesize={6} country="in" category="Technology" />} />
            <Route path='*' element={<News setprogress={setprogress} apikey={apikey} key="general" pagesize={6} country="in" category="general"/>}/>
          </Routes>
        </BrowserRouter>
      </div>     
    )
}

export default App;
