import React from 'react'

function Main(props) {
    const {data} = props
  return (
        <div className="imgContainer">
            <img src={data?.url} className= "bgImage" alt={data?.title}/>
        </div>
  )
}

export default Main