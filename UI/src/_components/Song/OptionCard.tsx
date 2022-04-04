import React, { CSSProperties } from 'react'

type optionProps = {
  key:number;
  label:string;
  selected:boolean;
}

function OptionCard(props:optionProps) {
  //Visually identify selected options
  const selectionStyle = props.selected? {backgroundColor: 'rgb(0,0,0)'}: {backgroundColor: 'rgb(255,255,255)'}
  return (
    <div key={props.key} className="options_layout">
      <div className="selector" style={selectionStyle}/>
      <div className='option_label'>{props.label}</div>
    </div>
  )
}

export default OptionCard
