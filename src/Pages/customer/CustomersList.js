import React,{useState, useEffect } from 'react'
import { useNavigate,useSearchParams } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import { TableData,PaginationData,CommonModal } from '../../components';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import { columns,data,getCustomersList } from './fixtures';
import {FiEdit} from 'react-icons/fi'
import {ImEnter} from 'react-icons/im'


const CustomersList = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const village = (searchParams.get('village'))

    const [show, setShow] = useState(false);
    const [modal, setModal] = useState(0);
    const [customersList, setCustomersList] = useState([])
    const [customerData, setcustomerData] = useState({id:0,villageName:'',customerName:''})
    
  const handleClose = (value={},type='') => {
    if(type==='add'){
      const newValue = {id:customersList.length+1,villageName:village,customerName:value.customerName}
      setCustomersList((prevValue)=>[...prevValue, newValue])
    }
    else{
      const tempArr = [...customersList]
      tempArr[value.id] = value
      setCustomersList(tempArr)
    }
    setTimeout(()=>{
      setShow(false);
      setModal(0)
    },100)
  }
  const handleShow = () => {
    setShow(true);
    setModal(2)
  }

  const handleEdit = (i,list) =>{
    setModal(1)
    setShow(true)
    setcustomerData({id:0,villageName:list.villageName,customerName:list.customerName})
  }

  useEffect(()=>{
      const result = getCustomersList(village)
      setCustomersList(result)
  },[])

    const handleEnter = (name) => {
      navigate({
        pathname: "/customerDetailsList",
        search: `?customer=${name}`
      });
    }

  const bodyData = customersList.length > 0 && customersList.map((list,i)=> {return <tr><td>{i+1}</td><td>{list.customerName}</td><td><span className='action-icons cursor-pointer mx-1' title="Edit"  onClick={()=>handleEdit(i,list)}><FiEdit/></span><span className='action-icons cursor-pointer mx-1' title="Go to next page" onClick={()=>handleEnter(list.customerName)}><ImEnter/></span></td></tr>})

    return <>
        <h2 className='text-center text-capitalize'>{village} Customers List</h2>
        <TableData columns={columns} bodyData={bodyData}/>
    {/* <PaginationData/> */}
    <div className='text-right'><Button onClick={handleShow}>Add Customer</Button></div>
    <CommonModal size="md" show={show} handleClose={handleClose}>
    {modal === 1 && <EditCustomer customerData={customerData} title="Edit Customer Name" handleClose={handleClose}/>}
    {modal === 2 && <AddCustomer title="Add Customer Name" handleClose={handleClose}/>}
    </CommonModal>
    </>
}

export default CustomersList