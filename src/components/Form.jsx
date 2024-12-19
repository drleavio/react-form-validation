import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "react-phone-input-2/lib/style.css";
import { formSchema } from '../schema/zod_validation';
import { z } from 'zod';

const Form = () => {
    const [data,setData]=useState({
        username:"",
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        confirm_password:"",
        phone_no:"",
        street_address:"",
        address_line_2:"",
        city:"",
        state:"",
        postal_code:"",
    })
    const [isChecked,setIsChecked]=useState(false)
    const handleCheck=(e)=>{
        setIsChecked(e.target.checked)
        console.log(isChecked);
        
    }
   
   
    const [errors,setErrors]=useState({
        username:"",
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        confirm_password:"",
        phone_no:"",
    })
    const usernameRegex = /^[a-z0-9]+$/;
    const passwordRegex=/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex=/^\d{10}$/
    function check(name,value){
        if(name==='username'){
            const response=usernameRegex.test(value);
            if(!response){
                setErrors({
                    ...errors,
                    [name]:"it does not contain any wide space characters"
                })
            }else{
                setErrors({
                    ...errors,
                    [name]:""
                })
            }
            
        }
        if(name==='first_name'){
            if(value===''){
                setErrors({
                    ...errors,
                    [name]:"first name can not be empty"
                })
            }else{
                setErrors({
                    ...errors,
                    [name]:""
                })
            }
        }
        if(name==='last_name'){
            if(value===''){
                setErrors({
                    ...errors,
                    [name]:"last name can not be empty"
                })
            }else{
                setErrors({
                    ...errors,
                    [name]:""
                })
            }
        }
        if(name==='password'){
            const response=passwordRegex.test(value)
            if(!response){
                setErrors({
                    ...errors,
                    [name]:"password is very week"
                })
            }else{
                setErrors({
                    ...errors,
                    [name]:""
                })
            }
        }
        if(name==='confirm_password'){
            if(value===''){
                setErrors({
                    ...errors,
                    [name]:""
                })
            }else if(value!==data.password){
                setErrors({
                    ...errors,
                    [name]:"please recheck the password"
                })
            }
        }
        if(name==='email'){
            const response=emailRegex.test(value)
            if(!response){
                setErrors({
                    ...errors,
                    [name]:"email is not valid"
                })
            }else{
                setErrors({
                    ...errors,
                    [name]:""
                })
            }
        }
        if(name==='phone_no'){
            const response=phoneRegex.test(value)
            if(!response){
                setErrors({
                    ...errors,
                    [name]:"phone number must be of atleast 10 digits"
                })
            }else{
                setErrors({
                    ...errors,
                    [name]:""
                })
            }
        }
        
    }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        check(name,value);
        setData({
            ...data,
            [name]:value
        })
        check(data)
    }
    const handleClick=(e)=>{
        e.preventDefault();
        console.log(data);
    }
  return (
    <div className='container-fluid d-flex align-items-start justify-content-center bg-pink-gradient' style={{height:"100vh",width:"100vw",paddingTop:"24px",overflowY:"auto",paddingBottom:"24px"}}>
        <div style={{backgroundColor:"white"}} className='d-flex align-items-center justify-content-center flex-column p-3 rounded'>
            <h2>Form Validation</h2>
            <form className='w-100'>
            <div className='d-flex align-items-center justify-content-end flex-column w-100 my-2'>
                <label htmlFor="username" className='w-100'>Username</label>
                <input type="text" value={data.username} name='username' onChange={handleChange} className='w-100 py-2 px-1 rounded' style={{border:"1px solid lightgray"}}/>
                {
                    errors.username && <div className='w-100 px-2 py-1 rounded mt-2' style={{backgroundColor:"lightcoral", color:"red"}}>{errors.username}</div>
                }
            </div>
            <div className='d-flex align-items-center justify-content-between w-100 gap-3 my-2 media'>
                <div className='flex-column w-100'>
                    <label htmlFor="first-name" className='w-100'>First Name</label>
                    <input type="text" name='first_name' onChange={handleChange} className='w-100 py-2 px-1 rounded' style={{border:"1px solid lightgray"}}/>
                    {
                    errors.first_name && <div className='w-100 px-2 py-1 rounded mt-2' style={{backgroundColor:"lightcoral", color:"red"}}>{errors.first_name}</div>
                    }
                </div>
                <div className='flex-column w-100'>
                    <label htmlFor="last-name" className='w-100'>Last Name</label>
                    <input type="text" name='last_name' onChange={handleChange} className='w-100 py-2 px-1 rounded' style={{border:"1px solid lightgray"}}/>
                    
                          {
                            errors.last_name && <div className='w-100 px-2 py-1 rounded mt-2' style={{backgroundColor:"lightcoral", color:"red"}}>{errors.last_name}</div>
                        }
                    
                </div>
            </div>
                <div className='d-flex align-items-center justify-content-start flex-column my-2'>
                    <label htmlFor="email" className='w-100'>Email</label>
                    <input type="email" name='email' onChange={handleChange} className='w-100 py-2 px-1 rounded ' style={{border:"1px solid lightgray"}}/>
                    {
                            errors.email && <div className='w-100 px-2 py-1 rounded mt-2' style={{backgroundColor:"lightcoral", color:"red"}}>{errors.email}</div>
                        }
                </div>
                <div className='d-flex align-items-center justify-content-between w-100 gap-3 my-2 media'>
                    <div className='flex-column w-100'>
                        <label htmlFor="password" className='w-100'>Password</label>
                        <input type="password" name='password' onChange={handleChange} className='w-100 py-2 px-1 rounded' style={{border:"1px solid lightgray"}}/>
                        {
                            errors.password && <div className='w-100 px-2 py-1 rounded mt-2' style={{backgroundColor:"lightcoral", color:"red"}}>{errors.password}</div>
                        }
                    </div>
                    <div className='flex-column w-100'>
                        <label htmlFor="password" className='w-100'>Confirm Password</label>
                        <input type="password" name='confirm_password' className='w-100 py-2 px-1 rounded' style={{border:"1px solid lightgray"}}/>
                        {
                            errors.confirm_password&& <div className='w-100 px-2 py-1 rounded mt-2' style={{backgroundColor:"lightcoral", color:"red"}}>{errors.confirm_password}</div>
                        }
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-start flex-column my-2'>
                <label htmlFor="password" className='w-100'>Phone No. (with country code)</label>
                      <input type="number" onChange={handleChange} name='phone_no'  className='w-100 py-2 px-1 rounded' style={{border:"1px solid lightgray"}}/>
                      {
                            errors.phone_no && <div className='w-100 px-2 py-1 rounded mt-2' style={{backgroundColor:"lightcoral", color:"red"}}>{errors.phone_no}</div>
                    }
                </div>
                <h3>Address</h3>
                <div className='d-flex align-items-center justify-content-start flex-column my-2'>
                    <label htmlFor="address" className='w-100'>Street Address</label>
                    <input autoFocus={false} name='street_address' onChange={handleChange} type="text" className='w-100 py-2 px-1 rounded' style={{border:"1px solid lightgray"}} />
                </div>
                <div className='d-flex align-items-center justify-content-start flex-column my-2'>
                    <label htmlFor="address" className='w-100'>Address Line 2</label>
                    <input type="text" name='address_line_2' onChange={handleChange} className='w-100 py-2 px-1 rounded' style={{border:"1px solid lightgray"}}/>
                </div>
                <div className='d-flex align-items-center justify-content-start flex-column my-2'>
                    <label htmlFor="address" className='w-100'>City</label>
                    <input type="text" name='city' onChange={handleChange} className='w-100 py-2 px-1 rounded' style={{border:"1px solid lightgray"}}/>
                </div>
                <div className='d-flex align-items-center justify-content-start flex-column w-100 my-2'>
                    <label htmlFor="address" className='w-100'>State</label>
                    <input type="text" name='state' onChange={handleChange} className='w-100 py-2 px-1 rounded' style={{border:"1px solid lightgray"}} />
                </div>
                <div className='d-flex align-items-center justify-content-start flex-column w-100 mt-2 mb-1'>
                    <label htmlFor="address" className='w-100'>Postal / Zip Code</label>
                    <input type="text" name='postal_code' onChange={handleChange} className='w-100 py-2 px-1 rounded' style={{border:"1px solid lightgray"}} />
                </div>
                <label className='mb-2'>
                <input type="checkbox"name="term" onChange={handleCheck} value="option1" className='pointer' style={{marginRight:"4px"}} />
                 I accept the <Link><span>terms and conditions</span></Link>
                </label>
                <button onClick={handleClick} disabled={!errors.username && !errors.email && !errors.first_name && !errors.last_name && !errors.password && !errors.phone_no && !isChecked} className='bg-primary w-100 mt-2 py-2 px-1 rounded' style={{border:"0",color:"white"}}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Form
