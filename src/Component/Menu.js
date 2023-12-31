import React from "react";
import game from '../static/images/game.jpg'
import music from '../static/images/music.jpg'
import setting from '../static/images/settings.png'
import '../CSS/menu.css'
// Renders main menu
class Menu extends React.Component{
    render() {
        const { active,menuItems, songImgUrl} = this.props;
        return (

            <div className="menu-container">
                <div className="menu">
                    <ul>
                        {menuItems.map((element, index)=>{
                            return active===index?<li key={index} className="active">&nbsp;{element}</li>:<li key={index}>&nbsp;{element}</li>
                        })}
                    </ul>
                </div>
                <div className="leaf">
                    {active === 0 && <img className="leaf-img" src={songImgUrl} alt=""></img>}
                    {active === 1 && <img className="leaf-img" src={music} alt=""></img>}
                    {active === 2 && <img className="leaf-img" src={game} alt=""></img>}
                    {active === 3 && <img className="leaf-img" src={setting} alt=""></img>}
                </div>
            </div>
        )
    }
}

export default Menu;