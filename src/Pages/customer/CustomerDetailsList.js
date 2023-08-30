import React,{useState ,useEffect } from 'react'
import {useSearchParams} from'react-router-dom'
import { Button } from 'react-bootstrap';
import { TableData,PaginationData,CommonModal } from '../../components';
import AddCustomerAmountDetails from './AddCustomerAmountDetails';
import EditCustomerAmountDetails from './EditCustomerAmountDetails'
import {FiEdit} from 'react-icons/fi'
import {ImEnter} from 'react-icons/im'
 
const CustomerDetailsList = () => {
    const [searchParams] = useSearchParams();
    const customer = (searchParams.get('customer'))
    

    const [show, setShow] = useState(false);
    const [modal, setModal] = useState(0);
    const [amountDetails, setAmountDetails] = useState([])
    const [editDetails, setEditDetails] = useState({})
    const [lastElement, setLastElement] = useState({})

    const columns = ['S.No', 'Date' , 'Total Amount', 'Paid Amount' ,'Balance Amount', 'Action']
    const data = [{date:'2023-08-22',totalAmount:5000,paidAmount:5000,balanceAmount:0},{date:'2023-06-24',totalAmount:10000,paidAmount:1000,balanceAmount:9000},]
    
  const handleClose= (value={},type='') => {
    if(Object.keys(value).length !== 0){
      if(type==='add')
      {
          const newValue = {date:value.formattedToday,totalAmount:value.data.totalAmount,paidAmount:value.data.paidAmount,balanceAmount:value.balanceAmount}
          setAmountDetails((prevValue)=>[...prevValue, newValue])
      }
      else{
        //const newValue = {date:value.formattedToday,totalAmount:value.data.totalAmount || 0,paidAmount:value.data.paidAmount,balanceAmount:value.data.balanceAmount}
        const tempArr = [...amountDetails]
        tempArr[value.id] = value
        setAmountDetails(tempArr)
      }
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

  const handleEdit =(id,list,customer)=>{
    setEditDetails({id,list,customer})
    setModal(1)
    setShow(true)
  }

  useEffect(()=>{
    setAmountDetails(data)
  },[])

  const bodyData = amountDetails.length > 0 && amountDetails.map((list,i)=> {return <tr key={i}><td>{i+1}</td><td>{list.date}</td><td>{list.totalAmount}</td><td>{list.paidAmount}</td><td>{list.balanceAmount}</td><td>{list.balanceAmount === 0 ? <span className='action-icons cursor-pointer mx-1' title="go to view page"><ImEnter/></span> : <span className='action-icons cursor-pointer mx-1' title="Edit" onClick={()=>handleEdit(i,list,customer)}><FiEdit/></span>}</td></tr>})

  
  
    return <>
        <h2 className='text-center text-capitalize'>{customer} Details</h2>
        <div className='customer-table'><TableData columns={columns} bodyData={bodyData}/></div>
        {/* <PaginationData/> */}
    
        {(amountDetails.slice(-1).length >0 && amountDetails.slice(-1)[0].balanceAmount === 0 )&& <div className='text-right'><Button onClick={handleShow}>Add New Amount Details</Button></div>}
        
        <CommonModal size="lg" show={show} handleClose={handleClose}>
        {modal === 1 && <EditCustomerAmountDetails editDetails={editDetails} title="Edit New Amount Details" handleClose={handleClose}/>}
        {modal === 2 && <AddCustomerAmountDetails title="Add New Amount Details" handleClose={handleClose}/>}
        </CommonModal>

    </>
}

export default CustomerDetailsList