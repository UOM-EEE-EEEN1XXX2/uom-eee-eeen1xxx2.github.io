document.getElementById("uom_alt_font_button").addEventListener("click",
    function(){
        function get_font() {
            var font;
            console.log("H");
            console.log(font);
            try { font = localStorage.getItem('uom-sphinx-font'); } catch (e) { }
            if (font === null || font === undefined) {
                console.log("G");
                return "font-roboto"; // default is hard coded
            } else {
                return font;
            }
        }
    
        function set_font(font, store = true) {
            var previousFont = get_font();
    
            if (store) {
                try { localStorage.setItem('uom-sphinx-font', font); } catch (e) { }
            }
    
            if (font === previousFont) {
                // no action needed
            }  else if (font === "font-roboto") {
                font = "font-opendyslexic";
            } else if (font === "font-opendyslexic") {
                font = "font-roboto";
            } else 
            {
                // something has gone wrong! Set roboto as default fonr
                font = "font-roboto";
            }
            html.classList.remove(previousFont);
            html.classList.add(font);
        }
        var font = get_font();
        console.log(font);
        set_font(font, false);
})