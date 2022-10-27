import { Button,TextField } from "@mui/material"
import './style.css'
import {createTheme,ThemeProvider} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const ContentNav = ({ content,papers })=>{

    
  

  const paperCount = papers.length

  const readCount = papers.filter(paper=>paper.read===true).length 



  const buttonTheme= createTheme({
    palette:{
        primary:{
            main:'#2D2A27'
        }
    }
   })

    return (
        <>
        <div className="contentNav">
            <div className="contentNavLeftBar">
            <div className="contentNavText">
             <h1>Welcome, Username!</h1>
             <p>You have {paperCount} items in your library, {readCount} read, {paperCount-readCount} unread</p>
            </div>
            <div className="contentNavButtons">
            <ThemeProvider theme={buttonTheme}>
            <div className="navButton">
                <Button> add a paper</Button>
                </div>
                <div className="navButton">
                <Button> add from Google Scholar</Button>
                </div>
            </ThemeProvider>
            </div>
            </div>
            <div className="contentNavSearch">
                <TextField size="small" label="search your library"/>
                <div className="search">
                <SearchIcon fontSize='large'/>
                </div>
            </div>
        </div>
        </>
    )
}

export default ContentNav