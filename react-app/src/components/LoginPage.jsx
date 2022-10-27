import { Button, createTheme, TextField,ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import './style.css'


const LoginPage =()=>{
    const navigate = useNavigate()
    const [handleReg,setHandleReg]= useState(true)
   

    const switchLogin =()=>{
        setHandleReg(true)
    }

   const switchReg=()=>{
    setHandleReg(false)

   }

   const login= ()=>{
     navigate('../profile')
   }

   const buttonTheme= createTheme({
    palette:{
        primary:{
            main:'#2D2A27'
        }
    }
   })

   


    return (
        <>
        <Header/>
        <div className='loginPage'>
        <div className='loginIntro'>
            <div className="introText">
            <p>bibliography assitant </p>
            <p>for students </p> 
            <p>and researchers</p>
            </div>
            <div className="introText2">
                <p>
                    plan and manage your research projects and reading lists
                </p>
            </div>
            
        </div>

        <div className='loginSection'>
             <div className='loginNav'>
             <ThemeProvider theme={buttonTheme}>
                <Button  onClick={switchLogin}>log in</Button>
                <Button  onClick={switchReg}>Register</Button> 
                </ThemeProvider>
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
                  <div className="button">
                  <ThemeProvider theme={buttonTheme}>
                  <Button variant='contained' onClick={login}>submit</Button>
                  </ThemeProvider>
                  </div>
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
                  <div className="button">
                  <ThemeProvider theme={buttonTheme}>
                  <Button variant='contained'>submit</Button>
                  </ThemeProvider>
                  </div>

                    </div>
                )}
                </div>
        </div>
        </>
    )
}

export default LoginPage