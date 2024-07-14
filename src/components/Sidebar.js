import React from 'react'

function Sidebar(props) {
    const {handleToggleModal, data} = props
  return (
    <div className='sidebar'>
        <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>{data?.title}</h2>
                <div>
                    <p className='descriptionTitle'>Description </p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
  )
}

export default Sidebar