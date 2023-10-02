import React from "react";
import '../CSS/lockscreen.css'
 // Renderse lockscreen
class Lockscreen extends React.Component{
    render() {
        return (
            <div>
                <div className="lock-display">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                </div>
                <div className="bottom-div-lock">
                    <h3>Press Centre Button to unlock!</h3>
                </div>
            </div>
        )
    }

}
export default Lockscreen;