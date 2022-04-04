import React, { useState } from "react";
import SongInfo from "../../_models/SongInfo";
import Header from "./Header";
import Row from "./Row";

type songsProps = {
  allSongsData: SongInfo[];
  songCols: string[];
  fetchFailed: boolean;
};

function Songs(props: songsProps) {
  const [songs, setSongs] = useState<SongInfo[]>(props.allSongsData)
  const songRow = props.allSongsData.map((eachsong, index) => {
    return <Row song={eachsong} key={index} />;
  });
  return (
    <div>
    <div className="title">List of All Songs</div>
    <div className="table_layout">
      
      <Header songCols={props.songCols} setSongs={setSongs} songs={songs}/>
      {props.fetchFailed
        ? "We ran into an error"
        : props.allSongsData.length
        ? songRow
        : "Error"}
    </div>
    </div>
  );
}

export default Songs;
