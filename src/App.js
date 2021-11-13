import {useState,useEffect} from 'react'
import axios from 'axios'
import Pagination from './Pagination';
import './App.css';

const DisplayList = () => {
  const [data,setData] = useState([])
  const [perPage,setperPage] = useState([])


  useEffect(() => {
    axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json').then(
      res => {setData(res.data); setperPage(res.data.slice(0,10));}
    )},[])

    const pageHandler = (pageNUmber) => {
      setperPage(data.slice((pageNUmber*10)-10,pageNUmber*10))
    }
 

  return(
    <center>
      {perPage.length > 0 ?
      <div>
        {perPage.map(eachItem => <h1>{eachItem.name}</h1>)}
        <Pagination data={data} pageHandler={pageHandler} />
         </div> :
        <p>no data available</p>
      }
    </center>
  )

}
  







export default DisplayList;
