import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import './style.css'

const LoginPage =()=>{
    const [handleReg,setHandleReg]= useState(true)

    const switchLogin =()=>{
        setHandleReg(true)
    }

   const switchReg=(e)=>{
    setHandleReg(false)

   }


    return (
        <>
        <div className='loginPage'>
        <div className='loginNav'>
        
                <Button  onClick={switchLogin}>log in</Button>
                
                <Button  onClick={switchReg}>Register</Button> 
             </div>

             {handleReg?(<>
             <div className='login'>
                 <TextField
                  required
                  label="email"
                  margin="normal"
                  />
                  <TextField
                  required
                  label="password"
                  margin="normal"
                  />
                  <Button variant='contained'>submit</Button>
                  </div>
                </>):(
                    <div className='register'>
                   <TextField
                   required
                   label="user name"
                   margin='normal'/>
                   <TextField
                  required
                  label="email"
                  margin="normal"
                  />
                  <TextField
                  required
                  label="password"
                  margin="normal"
                  />
                  <Button variant='contained'>submit</Button>
                   

                    </div>
                )}
                </div>
        </>
    )
}

export default LoginPage