import React, { useState } from "react";
import Arrow from "./Arrow";
import SongInfo from "../../_models/SongInfo";
import FormatColumnName from "../../_utils/FormatColumnName";

type colPros = {
  songs: SongInfo[];
  songCols: string[];
  setSongs: React.Dispatch<React.SetStateAction<SongInfo[]>>;
};
type SortKeys = keyof SongInfo;
type SortOrder = "ASC" | "DESC";

function Header(props: colPros) {
  const [sortKey, setSortKey] = useState("song");

  //Sort function here..
  const compare = (col:string, orderBy: string) => {
    return (a:SongInfo, b:SongInfo) => {
      if (a[col] < b[col]) {
        return orderBy === "descending" ? 1 : -1;
      }
      if (a[col] > b[col]) {
        return orderBy === "descending" ? -1 : 1;
      }
      return 0;
    };
  };
  const sortAndSetSongs = (col:string, ordering:string) => {
    const sortedSongs = [...props.songs].sort(compare(col, ordering));
    props.setSongs((prevSongs) => sortedSongs);
  };

  //Handler for arrow Click here..

  //Display column names in the header
  const columns = props.songCols.map((col, index) => {
    return (
      <div className="header_cell" key={index}>
        {FormatColumnName(col)}
        <div className="arrow_layout" onClick={() => sortAndSetSongs(col, "ASC")}>
          <Arrow rotate="rotate" />
        </div>
        <div className="arrow_layout">
          <Arrow />
        </div>
      </div>
    );
  });
  return <div className="header_layout">{columns}</div>;
}

export default Header;
