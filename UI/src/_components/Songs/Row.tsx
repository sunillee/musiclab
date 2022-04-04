import React from 'react'
import SongInfo from '../../_models/SongInfo'

type songProps = {
    song:SongInfo;
}

function Row(props:songProps) {
    const songValues = Object.values(props.song)
    const songRow = songValues.map((item,index) => {
        return <div key={index} className="table_cell">{item}</div>
    })
  return (
    <div className='header_layout'>
        {songRow}
    </div>
  )
}

export default Row
