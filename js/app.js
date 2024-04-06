 // selects social names and items
            // let navbar_items = document.querySelectorAll(".social");
            // let navbar_names = document.querySelectorAll(".hidden-subtitle");
            
            let _name = document.querySelector("#name");
            
            _name.addEventListener("mouseover",
                () => {
                    _name.textContent = "on sol";
            
                });
            
            _name.addEventListener("mouseout",
                () => {
                    _name.textContent = "$magi";
            
                });
            
            // adds hover effect for social icons
            navbar_items.forEach((social, i) => {
                social.addEventListener("mouseover", () => {
                    navbar_names[i].style.visibility = "visible";
                });
                
                social.addEventListener("mouseout", () =>{
                    navbar_names[i].style.visibility = "hidden";
                });
            });