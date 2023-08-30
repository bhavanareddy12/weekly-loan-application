import React,{useState, useEffect } from 'react'
import { useNavigate,useSearchParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { TableData,PaginationData,CommonModal } from '../../components';
import { columns ,getVillageslist } from './fixtures';
import AddVillage from './AddVillage'
import EditVillage from './EditVillage'
import {FiEdit} from 'react-icons/fi'
import {ImEnter} from 'react-icons/im'

const VillagesList = () => {
  // path params
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const day = (searchParams.get('day'))
  const time = (searchParams.get('time'))
  

    const [show, setShow] = useState(false);
    const [modal, setModal] = useState(0);
    const [villageData, setVillageData] = useState({id:0,name:''})
    const [villagesList, setVillagesList] = useState([])
    
  //Modal close functionality
  const handleClose = (value=0,type="") => {
    if(type==='add'){
      setVillagesList((prevValue)=>[...prevValue, value])
    }
    else{
      const tempArr = [...villagesList]
      tempArr[value.id] = value
      setVillagesList(tempArr)
    }
    setTimeout(()=>{
      setShow(false);
      setModal(0)
    },100)
  }

  //Modal open functionality
  const handleShow = () => {
    setShow(true);
    setModal(2)
  }

  //Edit modal open functionality
  const handleEdit = (i,list) =>{
    setModal(1)
    setShow(true)
    setVillageData({id:i,name:list.name})
  }

  const handleEnter = (name) => {
    navigate({
      pathname: "/customersList",
      search: `?village=${name}`
    });
  }
  
  useEffect(()=>{
    const result = getVillageslist(day,time)
    setVillagesList(result)
  },[])

  //console.log(villagesList,'villagesList')
  //Villages tables list data
  const bodyData = villagesList.length > 0 && villagesList.map((list,i)=> {return <tr key={i}><td>{i+1}</td><td>{list.name}</td><td><span className='action-icons cursor-pointer mx-1' title="Edit" onClick={()=>handleEdit(i,list)}><FiEdit/></span><span className='action-icons cursor-pointer mx-1' title="Go to next page" onClick={()=>handleEnter(list.name)}><ImEnter/></span></td></tr>})
  
    return <>
        <h2 className='text-center text-capitalize'>{day} {time} Villages List</h2>
        <TableData columns={columns} bodyData={bodyData}/>
        {/* <PaginationData/> */}
    
        <div className='text-right'><Button onClick={handleShow}>Add Village</Button></div>
        
        <CommonModal size="sm" show={show} handleClose={handleClose}>
        {modal === 1 && <EditVillage villageData={villageData} title="Edit Village Name" handleClose={handleClose}/>}
        {modal === 2 && <AddVillage title="Add Village Name" handleClose={handleClose}/>}
        </CommonModal>

    </>
}

export default VillagesList