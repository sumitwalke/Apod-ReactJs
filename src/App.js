import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null)
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal(){
    setShowModal(!showModal)
  }

  useEffect(()=>{
    async function fetchAPIData(){
      const NASA_KEY = 'bvBRBw1pFGIfjhFfXjows3ZRnkxJahb2w0EgFgv2'
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        setData(apiData)
        console.log(apiData)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchAPIData()
  }, [])

  return (
    <>
      {data ? (<Main data = {data}/>): (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (<Sidebar data = {data} handleToggleModal={handleToggleModal}/>)}
      {data && (<Footer data= {data} handleToggleModal={handleToggleModal}/>)}
    </>
  );
}

export default App;
