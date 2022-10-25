import { Avatar, Button, Divider, List,ListItem, ListItemText} from "@mui/material"
import CardOverflow from '@mui/joy/CardOverflow';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import CardContent from '@mui/joy/CardContent';
import Header from "./Header"
import { createTheme, ThemeProvider} from "@mui/material";

import './style.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const ProfilePage =()=>{
    const [editing, setEditing]=useState(false)
    const navigate =useNavigate()


    const logout =()=>{
       navigate('../')
    }

    const editUser =()=>{
      setEditing(true)
    }


    const buttonTheme= createTheme({
        palette:{
            primary:{
                main:'#2D2A27'
            }
        }
       })

    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      };

    return (
        <>
        <Header/>
        <div className="profilePage">
            <div className="sideNavBar">
            <div className="userInfo">
               <Card row sx={{width:260,bgcolor: 'background.body'}}>
               <CardOverflow>
                <div className="avatar">
                <Avatar sx={{width:70,height:70}}>DL</Avatar>
                </div>
                </CardOverflow>
                <CardOverflow>
                    <CardContent sx={{ px: 2 }}>
                    <Typography className="username" fontWeight={900} fontSize={20} mb={0.5} >Username</Typography>
                    <Typography className="description" fontWeight={200} level='body2'>test account</Typography>
                    <ThemeProvider theme={buttonTheme}>
                    <Button size="small" onClick={logout}>Log out</Button>
                    <Button size="small" onClick={editUser}>Edit</Button>
                    </ThemeProvider>
                    </CardContent>
                </CardOverflow>
               
               </Card>
            </div>

            <div className="navList">
            <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Papers" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Projects" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Todos" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Folders" />
      </ListItem>
    </List>
            </div>
            </div>

            <div className="profileContent">

                
            </div>
           
        </div>
        </>
    )

}

export default ProfilePage