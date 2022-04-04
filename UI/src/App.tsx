import React, { useState, useEffect } from "react";
import "./App.css";
import { Routing } from "./_routes/Routes";
import SongInfo from "./_models/SongInfo";

function App() {
  const [allSongsData, setAllSongsData] = useState<SongInfo[]>([]);
  const [songCols, setSongCols] = useState<string[]>([]);
  const [fetchFailed, setFetchFailed] = useState<boolean>(false);

  const getData = () => {
    fetch(
      "songData.json" //local mockdata
    )
      .then((response) => response.json())
      .then((data) => {
        setAllSongsData(data);
        setSongCols(Object.keys(data[0]));
      })
      .catch((error) => {
        setFetchFailed(true);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Routing
      allSongsData={allSongsData}
      songCols={songCols}
      fetchFailed={fetchFailed}
    />
  );
}

export default App;
