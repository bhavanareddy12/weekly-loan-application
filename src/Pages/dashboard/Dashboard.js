import React from 'react'
import { createSearchParams,useNavigate } from 'react-router-dom';
import { Button ,Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { daysList, timeList } from './fixtures';

const Dashboard = () => {
  const navigate = useNavigate()
  const {register, handleSubmit, formState: { errors }} = useForm();
  
  const onSubmit = (data) =>{
    navigate({
      pathname: "/villagesList",
      search: `?day=${data.day}&time=${data.time}`
    });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="dashboard-form">
          <Col md={6}>
            <div className="d-flex  dashboard-grid mb-2">
              <label><strong>Select Day :&nbsp;</strong></label>
              <div>
              {daysList.map((day,id) => (
                <div key={id} className="d-block">
                  <Form.Check label={day} name={day} value={day} type="radio" id={day} {...register("day",{ required: true })}/>
                </div>
              ))}
              </div>
            </div>
            {errors.day &&<span className="text-red fw-bold">Please select any one day</span>}
          </Col>
          <Col md={6} className='d-flex flex-column justify-content-between'>
            <div className='d-flex dashboard-grid mb-2'>
              <label><strong>Time : &nbsp;</strong></label>
              <div>
              {timeList.map((time,id) => (
                <div key={id} className="d-block">
                  <Form.Check label={time} name={time} value={time} type="radio" id={time} {...register("time",{ required: true })} />
                </div>
              ))}
              </div>
            </div>
              {errors.time && <span className="text-red fw-bold">Please select any time</span>}
          </Col>
      </Row>
      <Row className='justify-content-center mt-4'><Button type="submit">Submit</Button></Row>
    </Form>
  )     
}

export default Dashboard