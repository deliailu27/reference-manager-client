import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"
import { Card,Button } from "@mui/material"
import './style.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import {createTheme,ThemeProvider,Link} from "@mui/material";
import TaskIcon from '@mui/icons-material/Task';




const PaperItem =(paper,papers)=>{
    const [deleteWarning, setDeleteWarning]=useState(false)
    const [showDetails,setShowDetails]=useState(false)
    const [read, setRead]=useState(false)

    useEffect(()=>{
        setRead(paper.paper.read)
    },[paper])
    

    const openPaperLink=()=>{
        window.open(paper.paper.link)
    }

    const deletePaper=()=>{
        setDeleteWarning(true)
    }

    const confirmDelete=(e)=>{
       console.log(papers)
       
    }

    const togglePaperDetails=()=>{
      if(showDetails){
        setShowDetails(false)
      }
      else setShowDetails(true)
    }   
    
    const markRead=()=>{
        if(read){
            paper.paper.read=false
            setRead(false)
        }
        else {setRead(true)}
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
        <div className="paperItem">
            <Card variant="outlined">
                <div className="paperCard">
                <div className="cardContent">
                   
                <h2 onClick={openPaperLink} >{paper.paper.title}
                {read &&(<div className="readIcon">
                <TaskIcon fontSize="small"/></div>)}
                </h2>
               
                <div className="author">
                <p>{paper.paper.publication_info.summary}</p>
                </div>
                <p>{paper.paper.snippet}</p>
               
                </div>
                <div className="cardNav">
                    {deleteWarning? (
                        <div className="confirmDeleteText" onClick={confirmDelete}>
                            Confirm?
                        </div>
                    ):( <div className="deletIcon" onClick={deletePaper}>
                       <DeleteIcon/>
                        </div>)}
                   {showDetails?(<><KeyboardArrowUp onClick={togglePaperDetails}/></>):( <KeyboardArrowDown onClick={togglePaperDetails}/>)}
                   
                </div>
                </div>
            </Card>
            {showDetails && (
                    <>
                    <div className="cardDetails">
                    <ThemeProvider theme={buttonTheme}>
                            <div className="detailList">
                            <div className="paperButton" >
                                {read?(<Button variant="contained" onClick={markRead}>Mark as unread</Button>):(<Button variant="contained" onClick={markRead}>Mark as read</Button>)}
                                
                            </div>
                            <div className="paperButton">
                                <Button variant="contained">Add to Project</Button>
                            </div>
                            <div className="paperButton">
                                <Button variant="contained">Add to Folder</Button>
                            </div>
                            <div className="paperButton">
                                <Button variant="contained">Generate citation</Button>
                            </div>
                            </div>
                     </ThemeProvider>
                     
                    </div>
                    </>
                )}
        </div>
        </>
    )

}

export default PaperItem