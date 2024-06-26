import React, { useEffect, useState } from "react";
import "./Theme.css"
function Theme() {
	const [theme, setTheme] = useState("light-theme");
	const toggletheme = () => {
		theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme")
        // onClick={()=>toggletheme()
	};

	useEffect(() => {
		if (theme === "dark-theme") { 
			document.body.className = 'light-theme class1 class2 class3';
			
		} else {
			document.body.className = 'dark-theme';
		}
    }, [theme]);

	return <>
  <div class="wrapper">
<input type="checkbox" name="checkbox" class="switch" onClick={()=>toggletheme()} />
</div>

    
   
   </>;
}

export default Theme;

