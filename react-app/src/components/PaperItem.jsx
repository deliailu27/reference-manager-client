import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"
import { Card } from "@mui/material"
import './style.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";



const PaperItem =(paper,papers)=>{
    const [deleteWarning, setDeleteWarning]=useState(false)

    const paperLink=()=>{
      
    }

    const deletePaper=()=>{
        setDeleteWarning(true)
    }

    const confirmDelete=(e)=>{
       console.log(papers)
       
    }
    

    return (
        <>
        <div className="paperItem">
            <Card variant="outlined">
                <div className="paperCard">
                <div className="cardContent">
                <h2 onClick={paperLink}>{paper.paper.title}</h2>
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
                   
                    <KeyboardArrowDown/>
                </div>
                </div>

            </Card>
        </div>
        </>
    )

}

export default PaperItem