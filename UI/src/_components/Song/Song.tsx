import React, { useState } from "react";
import FormatColumnName from "../../_utils/FormatColumnName";
import OptionCard from "./OptionCard";

type songProps = { songCols: string[] };

function Song(props: songProps) {
  const [songName, setSongName] = useState<string>("");
  const [selectedQueryArguments, setSelectedQueryArguments] = useState<string []>([]);
  //Search button click handler here
  
  //Option button click handler here

  //Show Options
  const optionsMap = props.songCols.map((col, index) => {
    return (
      <OptionCard
        key={index}
        label={FormatColumnName(col)}
        selected={selectedQueryArguments.includes(col)}
      />
    );
  });
  return (
    <div>
      <div className="query_container">
        <input placeholder="Enter song name" className="input_format" />
        <button className="search_button">Get Song Details</button>
      </div>
      <div className="options_container">{optionsMap}</div>
    </div>
  );
}

export default Song;
