import React from "react";
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const EditVillage = ({villageData,title,handleClose}) =>{
    const { register, handleSubmit, formState: { errors }, } = useForm();
    

    const onSubmit = (data) => {
        handleClose({name:data.editVillage,id:villageData.id},'edit')
    }


    return<>
    <h5>{title}</h5>
    <div className='modal-form'>
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Control placeholder="Edit Village Name" defaultValue={villageData.name} aria-label="villageName" {...register('editVillage',{required:{
            value:true,
            message:"Village name is required"
        },pattern: {
            message: 'Please enter valid name',
            value: /^[a-zA-Z ]+$/,
          }})}/>
        <span className="text-red fw-bold">
            {errors.editVillage && errors.editVillage.message}
        </span> <br/>
        <Button className='my-2' type="submit">Submit</Button>
    </Form>
    </div>    
</>
}

export default EditVillage