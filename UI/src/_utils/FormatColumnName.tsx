import React from "react";

function FormatColumnName(value: string) {
  if (value.includes("metric")) {
    return value.replace("metric", "Metric ");
  } else if (value === "playCount") {
    return "Play Count";
  } else if (value === "songReleaseDate") {
    return "Song Release Date";
  } else if (value === "song") {
    return "Song";
  } else if (value === "artist") {
    return "Artist";
  }
  return value;
}

export default FormatColumnName;
