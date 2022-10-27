import { Avatar, Button, Divider, List,ListItem, ListItemText} from "@mui/material"
import CardOverflow from '@mui/joy/CardOverflow';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import CardContent from '@mui/joy/CardContent';
import Header from "./Header"
import { createTheme, ThemeProvider} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FolderIcon from '@mui/icons-material/Folder';

import './style.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Papers from "./Papers";
import ContentNav from "./ContentNav";
import paperdb from "../db/paper";
import folderdb from "../db/folders";




const ProfilePage =()=>{
    const [editing, setEditing]=useState(false)
    const [showFolders, setShowFolders]=useState(false)
    const navigate =useNavigate()
    const [content, setContent] = useState ('papers')
    const [papers, setPapers]=useState(paperdb)
    const [folders,setFolders]=useState(folderdb)

    const openFolder=(e)=>{
       const paperToRender = folders.filter((folder)=>(folder.folderName===e.target.id))
       console.log(paperToRender[0].items)
       setPapers(paperToRender[0].items)
    }


    const logout =()=>{
       navigate('../')
    }

    const editUser =()=>{
      setEditing(true)
    }

    const toggleFolders = ()=>{
        if(showFolders){setShowFolders(false)}
        else setShowFolders(true)
    }

    
        const togglePapers =()=>{
            setContent('papers')
            setPapers(paperdb)
    
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
              <ListItem button onClick={togglePapers}>
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
             <ListItem button onClick={toggleFolders}>
               <ListItemText primary="Folders" />
               {showFolders?(<KeyboardArrowUpIcon/>):(<KeyboardArrowDownIcon/>)}
             </ListItem>
             <Divider light />
               {showFolders?(
               <div className="folderList">
              <List sx={style} component="nav" aria-label="mailbox folders">
                  {folders.map((folder)=>(
                   <ListItem button onClick={openFolder}>
                   <div className="folderListItem">
                    <div id={folder.folderName} className="folderName"> {folder.folderName}</div>
                    <div className="folderIcon">
                        <p>{folder.items.length}</p>
                     <FolderIcon fontSize="small"/>
                     </div>
                     </div>
                </ListItem>
            ))}
        </List>
        </div>
        ):(<></>)}
            </List>
            </div>
            </div>

            <div className="profileContent">
                <ContentNav content={content} papers={papers}/>
                <div className="contentDisplay">
                <Papers papers={papers} />
                </div>
                
            </div>
           
        </div>
        </>
    )

}

export default ProfilePage