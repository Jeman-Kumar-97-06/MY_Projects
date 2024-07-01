import { ThemeContext } from "../contexts/ThemeContext";
import { Component } from "react";
class ToggleTheme extends Component{
    render(){
        return (
            <ThemeContext.Consumer>
                {
                    context => {
                        const {toggT} = context;
                        return (
                            <div>
                                <button onClick={toggT}>Toggle Theme</button>
                            </div>
                        )
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}

export default ToggleTheme;