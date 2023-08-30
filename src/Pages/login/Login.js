import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Row,Alert} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import {loginFun} from './fixtures'

const Login = () => {
  const navigate = useNavigate()
  const [apiResult, setApiResult] = useState()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /*   @note login submit functionality  */
  const onSubmit = async (data) =>{
    
   let result = loginFun(data)
   if(result.status === 200){
    setApiResult(result)
    localStorage.setItem('username',data.email)
    setTimeout(()=>{
      navigate('/dashboard')
    },2000)
   }
    else{
      setApiResult(result)
    }
  }

    return (
    <Row className='m-0 h-100'>
      <Col className="bluelight-bg d-flex align-items-center justify-content-center"><h2 className='text' data-fill-text="WEEKLY LOAN APPLICATION">WEEKLY LOAN <br/>APPLICATION</h2></Col>
      <Col className='d-flex align-items-center justify-content-center'>
        <Card style={{ width: '25rem' }} className='p-4 rounded login-box'>
          <h2 className='text-center' style={{color:"#322653"}}>Login</h2>
          {apiResult && <Alert key={apiResult.color} variant={apiResult.color}>
            {apiResult.message}
          </Alert>}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" className={errors.email ? 'error-input' : ''} placeholder="Email Address" {...register("email", {required: "Email is required",pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message: "Please enter a valid email !"}})}/>
              <span className="text-red fw-bold">
                {errors.email && errors.email.message}
              </span>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" className={errors.password ? 'error-input' : ''} placeholder="Password" {...register('password', { required: "Password is reqired", minLength: {
              value: 5,message: "Minimum 5 characters required"},maxLength: {value: 10,message: "Password length Exceeded"}})}/>
                <span className="text-red fw-bold">
                  {errors.password && errors.password.message}
                </span>
              </Form.Group>
            <Button type="submit" className='w-100'>Submit</Button>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default Login
export {Login}