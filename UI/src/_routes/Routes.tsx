import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "../_components/Home";
import Song from '../_components/Song/Song';
import Songs from "../_components/Songs/Songs"
import SongInfo from '../_models/SongInfo'
import Navbar from '../_components/Navbar'


type routeProps = {
  allSongsData: SongInfo[];
  songCols: string[];
  fetchFailed: boolean;
};

export const Routing = (props: routeProps) => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song" element={<Song songCols={props.songCols}/>} />
        <Route path="/songs" element={<Songs allSongsData={props.allSongsData} songCols={props.songCols} fetchFailed={props.fetchFailed} />} />
      </Routes>
    </BrowserRouter>
  );
};
