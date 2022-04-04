import React, { useState } from "react";
import Arrow from "./Arrow";
import SongInfo from "../../_models/SongInfo";
import FormatColumnName from '../../_utils/FormatColumnName'

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
  /*   const compare = (column:String, orderBy:String) => {
    return (a:SongInfo, b:SongInfo) => {
      if (a[column] < b[column]) {
        return orderBy === 'descending' ? 1 : -1;
      }
      if (a[column] > b[column]) {
        return orderBy === 'descending' ? -1 : 1;
      }
      return 0;
    }};
     const sortAndSetSongs = () => {
    //const sortedSongs = [...props.songs].sort(compare(column, orderBy));
    props.setSongs((prevSongs) => sortedSongs);
  };
 */
  const updateSortType = (col: string) => {
    setSortKey(col);
  };

  //Handler for arrow Click here..

  //Display column names in the header
  const columns = props.songCols.map((col, index) => {
    return (
      <div className="header_cell" key={index}>
        {FormatColumnName(col)}
        <div className="arrow_layout">
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
