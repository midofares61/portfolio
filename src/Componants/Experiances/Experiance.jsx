import "./experiance.css"
import { useContext } from "react";
import { themeContext } from "../../Context";
function Experianc(){
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <>
            <div className="container experianc" id="experianc">
                <div className="box">
                    <div className="circle" style={{color:darkMode? "black":""}}>+8</div>
                    <span>year</span>
                    <span>experiances</span>
                </div>
                <div className="box">
                    <div className="circle" style={{color:darkMode? "black":""}}>+20</div>
                    <span>project</span>
                    <span>Complete</span>
                </div>
                <div className="box">
                    <div className="circle" style={{color:darkMode? "black":""}}>+5</div>
                    <span>Companies</span>
                    <span>Work</span>
                </div>
            </div>
        </>
    )
}
export default Experianc;