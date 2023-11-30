import React from 'react'

const card = ({name,height,fname,id,dh}) => {
 // console.log(name)
  return (
    <div >
     {dh && <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{dh(id)}}>X</button></div>}
     <div>Name :{name}</div>
     <div>Height :{height}</div>
     <div>Films :</div>
     {fname!=undefined && fname.map((v)=>{
      return <div>{v}</div>}
     )}
     <br/>
    </div>
  )
}

export default card