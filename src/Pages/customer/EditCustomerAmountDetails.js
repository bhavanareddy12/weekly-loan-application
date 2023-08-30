import React,{useEffect, useState} from "react"
import {Form, Row, Col, Button } from 'react-bootstrap'
import DatePicker from 'react-date-picker';
import { dateFormateFun } from "../../utils/dateFormate";

const EditCustomerAmountDetails = ({editDetails,title,handleClose}) => {
    //console.log(editDetails,editDetails.list.date)
    //const { register, handleSubmit, formState: { errors }, } = useForm();
    
    const [value, onChange] = useState(new Date(editDetails.list.date));
    const [previousPaidVal, setPreviousPaidVal] = useState(0)
    const [paidVal, setPaidVal] = useState(0)
    const [balanceVal, setBalanceVal] = useState(0)
    const [details, setDetails] = useState([])
    const [submitVal, setSubmitVal] = useState(false)
    const [errorMsgs, setErrorMsgs] = useState({dateErr:"",paidErr:""})

    const  handleChange = (e) => {
        setPreviousPaidVal(Number(e.target.value))
    }

    
    const data = [{date:'2023-08-22',lastWeekAmount:0,thisWeekAmount:1000,totalPaidAmount:1000,balanceAmount:9000},{date:'2023-08-22',lastWeekAmount:1000,thisWeekAmount:1000,totalPaidAmount:2000,balanceAmount:8000},]

    useEffect(()=>{
        const paidValue = (details.slice(-1).length >0 && details.slice(-1)[0].totalPaidAmount || 0) + previousPaidVal
        setPaidVal(paidValue)
        
        console.log(details.slice(-1).length >0 && details.slice(-1)[0].totalPaidAmount || 0,previousPaidVal)
        const val =  editDetails.list.totalAmount - paidValue
        setBalanceVal(val)
        if(!submitVal) setDetails(data) // if condition should remove after api integration
    },[previousPaidVal])

    const handleSubmit = (event ) => {
        event.preventDefault(); 
        let pattern = /^[0-9]+$/
        if(value !== null && value !== undefined && pattern.test(previousPaidVal)){
            const formattedToday = dateFormateFun(value)
            const newValue = {date:formattedToday,lastWeekAmount:details.slice(-1).length >0 && details.slice(-1)[0].totalPaidAmount || 0,thisWeekAmount:previousPaidVal,totalPaidAmount:paidVal,balanceAmount:balanceVal}
            //console.log(newValue)
            setDetails((prevValue)=>[...prevValue, newValue])
            setSubmitVal(true)
            setPreviousPaidVal(0)
            handleClose({date:formattedToday,totalAmount:editDetails.list.totalAmount,paidAmount:paidVal,balanceAmount:balanceVal,id:editDetails.id},'edit')
        }
        
        else if (isNaN(previousPaidVal) && (value == null || value === undefined)){
            setErrorMsgs({
                dateErr:"Please enter valid the date",
                paidErr:"Please enter valid data"
            })
        }
       else if(isNaN(previousPaidVal)){
        setErrorMsgs(prevState => ({
            ...prevState,
            paidErr:"Please enter valid data"
        }));
       }
       else if(value === null || value === undefined){
        setErrorMsgs(prevState => ({
            ...prevState,
            dateErr:"Please enter valid the date"
        }));
       }
        
    }

    

    const bodyData = details.length > 0 && details.map((list,i)=> {return <tr key={i}><td>{i+1}</td><td>{list.date}</td><td>{list.lastWeekAmount}</td><td>{list.thisWeekAmount}</td><td>{list.totalPaidAmount}</td><td>{list.balanceAmount}</td></tr>})

    // console.log(details.slice(-1).length >0 && details.slice(-1)[0].totalPaidAmount)
     console.log(errorMsgs)

    return <>
    <h5>{title}</h5>
    <div className='modal-form'>
    <Form onSubmit={handleSubmit}>
            
                <Row>
                    {/* <Col md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Row>
                                <Col md={4} className="pr-0"><Form.Label>Customer Name</Form.Label></Col>
                                <Col md={1}>:</Col>
                                <Col md={7}><Form.Control type="text" placeholder="Customer Name" value={editDetails.customer}/></Col>
                            </Row>
                        </Form.Group>
                    </Col> */}
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Row>
                                <Col md={4} xs={4} className="pr-0"><Form.Label>Total Amount</Form.Label></Col>
                                <Col md={1} xs={1}>:</Col>
                                <Col md={7} xs={6}>{editDetails.list.totalAmount}</Col>
                            </Row>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Row>
                                <Col md={4} xs={4} className="pr-0"><Form.Label>Paid Amount</Form.Label></Col>
                                <Col md={1} xs={1}>:</Col>
                                <Col md={7} xs={6}>
                                    <Form.Control type="text" className='mb-1' value={details.slice(-1).length >0 && details.slice(-1)[0].totalPaidAmount || 0} readOnly/>
                                    <Form.Control type="text" placeholder="Paid Amount"  defaultValue={previousPaidVal} onChange={(e)=>handleChange(e)} />
                                    {/* defaultValue={editDetails.list.paidAmount} */}
                                    <span className="text-red fw-bold">
                                    {errorMsgs.paidErr}
                                    </span>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                    <Col md={6}>                                                                          
                        <Row>
                            <Col md={4} xs={4} className="pr-0"><span>Date </span></Col>
                            <Col md={1} xs={1}>:</Col>
                            <Col md={7} xs={6}>
                                <DatePicker onChange={onChange} value={value} />
                                <span className="text-red fw-bold">
                                    {errorMsgs.dateErr}
                                </span>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Row>
                                <Col md={4} xs={4} className="pr-0"><Form.Label>Balance Amount</Form.Label></Col>
                                <Col md={1} xs={1}>:</Col>
                                <Col md={7} xs={6}>{balanceVal}</Col>
                            </Row>
                        </Form.Group>
                    </Col>
                </Row>
                <Button type='submit' className='my-2'>submit</Button>
        </Form>
        <table border="1">
        <tr>
            <th rowspan="2">S.No</th>
            <th rowspan="2" >Date</th>
            <th colspan="3">Paid Amount</th>
            <th rowspan="2">Balance Amount</th>
        </tr>
        <tr>
            <th>last week paid amount</th>
            <th>This week paid amount</th>
            <th>final paid amount</th>
        </tr>
        {/* <tr>
            <td>1</td>
            <td>16-08-2023</td>
            <td>1000</td>
            <td>500</td>
            <td>1500</td>
            <td>500</td>
        </tr> */}
        {bodyData}
        
        </table>
        </div>
    </>
}

export default EditCustomerAmountDetails