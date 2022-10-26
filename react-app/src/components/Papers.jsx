
import PaperItem from "./PaperItem"


const Papers = (papers)=>{
     
    console.log('papers to render',papers.papers)
    const paperToRender = papers.papers


    return (
        <>
        <div className="paper">
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