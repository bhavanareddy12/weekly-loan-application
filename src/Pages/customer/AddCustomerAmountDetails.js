import React,{useEffect, useState} from "react"
import {Form, Row, Col, Button } from 'react-bootstrap'
import DatePicker from 'react-date-picker';
import { useForm } from 'react-hook-form';
import { dateFormateFun } from "../../utils/dateFormate";

const AddCustomerAmountDetails = ({title,handleClose}) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    
    const [value, onChange] = useState(new Date());
    const [dateError, setDateError] = useState('')
    const [balanceAmount, setBalanceAmount] = useState(0)
    
    const handleDate = () => {
       if(value === null || value === '' || value === undefined){
        setDateError("Date is required")
       }
       else{
        setDateError("")
       }
    }

    const onSubmit = (data) => {
        //console.log(data,value)
        if(data && (value !== '' && value !== null && value !== undefined)){
            const formattedToday = dateFormateFun(value)
            handleClose({data,formattedToday,balanceAmount},'add')
            setDateError("")
        }
        else{
            setDateError("Date is required")
        }
    }
    const amountValue = watch({paidAmount:"paidAmount",totalAmount:"totalAmount"});
    

    const balanceAmountFunc = () => {
        const val = amountValue.totalAmount - amountValue.paidAmount
        setBalanceAmount(val)
    }
    useEffect(()=>{
        document.getElementById("date").onclick = function(){
            if(value === null || value === '' || value === undefined){
                setDateError("Date is required")
               }
               else{
                setDateError("")
               }
        }
        balanceAmountFunc()
    },[value,amountValue])

    return <>
    <h5>{title}</h5>
    <div className='modal-form'>
    <Form onSubmit={handleSubmit(onSubmit)}>
            
                <Row>
                    {/* <Col md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Row>
                                <Col md={4} className="pr-0"><Form.Label>Customer Name</Form.Label></Col>
                                <Col md={1}>:</Col>
                                <Col md={7}><Form.Control type="text" placeholder="Customer Name" {...register('customerName',  {required: "Customer Name is reqired"})}/></Col>
                            </Row>
                            <span className="text-red fw-bold">
                  {errors.customerName && errors.customerName.message}
                </span>
                        </Form.Group>
                    </Col> */}
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Row>
                                <Col md={4} xs={4} className="pr-0"><Form.Label>Total Amount</Form.Label></Col>
                                <Col md={1} xs={1}>:</Col>
                                <Col md={7} xs={6}>
                                    <Form.Control type="text" placeholder="Total Amount" {...register('totalAmount', { required:{
                                        value:true,
                                        message:"Please check the total Amount"
                                    },pattern:{
                                        value:/^[0-9]+$/,
                                        message:"Please enter numbers only"
                                    }})}/>
                                    <span className="text-red fw-bold">
                                        {errors.totalAmount && errors.totalAmount.message}
                                    </span>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Row>
                                <Col md={4} xs={4} className="pr-0"><Form.Label>Paid Amount</Form.Label></Col>
                                <Col md={1} xs={1}>:</Col>
                                <Col md={7} xs={6}>
                                    <Form.Control type="text" placeholder="Paid Amount"  {...register('paidAmount', { required:{
                                        value:true,
                                        message:"Please check the Paid Amount"
                                    },pattern:{
                                        value:/^[0-9]+$/,
                                        message:"Please enter numbers only"
                                    }})}/>
                                    <span className="text-red fw-bold">
                                         {errors.paidAmount && errors.paidAmount.message}
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
                                <DatePicker onChange={onChange} id="date" onClick={handleDate} value={value}/>
                                <span className="text-red fw-bold">
                                    {dateError}
                                </span>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Row>
                                <Col md={4} xs={4} className="pr-0"><Form.Label>Balance Amount</Form.Label></Col>
                                <Col md={1} xs={1}>:</Col>
                                <Col md={7} xs={6}>
                                    <Form.Control type="text" value={balanceAmount} readOnly/>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                    
                </Row>
                <Button type='submit' className='my-2'>submit</Button>
        </Form>
        </div>
    </>
}

export default AddCustomerAmountDetails