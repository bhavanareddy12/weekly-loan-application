import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from 'react-hook-form';

const EditCustomer = ({customerData,title,handleClose}) => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        handleClose({customerName:data.customerName,id:customerData.id,villageName:customerData.villageName},'edit')
    }
    return <>
    <h5>{title}</h5>
    <div className='modal-form'>
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
            <Col md={6}>
            <Form.Control
  placeholder="Edit Customer Name"
  aria-label="customerName" defaultValue={customerData.customerName}
  aria-describedby="basic-addon2" {...register('customerName',{required:{
    value:true,
    message:"Customer name is required"
},pattern: {
    message: 'Please enter valid name',
    value: /^[a-zA-Z ]+$/,
  }})}
/>
<span className="text-red fw-bold">
            {errors.customerName && errors.customerName.message}
        </span><br/> 
            </Col>
        </Row>
<Button type="submit" className='my-2'>Submit</Button>
</Form>
    </div>
    
    </>
}

export default EditCustomer