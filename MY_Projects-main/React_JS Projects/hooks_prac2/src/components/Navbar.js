import { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component{
    static contextType = ThemeContext;
    render(){
        const {isLightTheme,light,dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="navbar_comp" style={{background:theme.ui,color:theme.syntax}}>
                <h1>Hooks Prac App</h1>
                <ul>
                    <li><a style={{color:theme.syntax}} href='/'>Home.</a></li>
                    <li><a style={{color:theme.syntax}} href='/create'>Create.</a></li>
                    <li><a style={{color:theme.syntax}} href='/about'>About.</a></li>
                    <li><a style={{color:theme.syntax}} href='/contact'>Contact.</a></li>
                </ul>
            </div>
        )
    }
}


export default Navbar;