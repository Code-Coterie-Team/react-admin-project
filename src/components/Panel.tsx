import React, { ReactNode } from 'react'

interface IPanelProps{
    icon:ReactNode;
    title:string;
    amount:number;
    type:"persent" | "aset";
    
}

function Panel(props:IPanelProps) {
  return (
    <div>
      
    </div>
  )
}

export default Panel
