import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PaperItem from "./PaperItem"


const Papers = (papers)=>{
     
    console.log('papers to render',papers.papers)
    const paperToRender = papers.papers


    return (
        <>
        <div className="paper">
            <div className="filterBar">
                <div className="filterBarText">
                filter by:
                </div>
                <div className="radioButtons">
                <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                 >
               <FormControlLabel value="time" control={<Radio />} label="Time" />
               <FormControlLabel value="read" control={<Radio />} label="Read/Not read" />
               </RadioGroup>
               </FormControl>
               </div>
            </div>
            {paperToRender?.map((paper)=>(
                 <PaperItem
                 paper={paper}
                 papers={papers.papers}
                 />
            ))}
               

        </div>
        </>
    )
}

export default Papers