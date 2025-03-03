(function fonts() {
    var header = document.querySelector('header');
    var body   = document.querySelector('body');
    var fontToggleButton = document.getElementById('uom_alt_font_button');

        function get_font() {
            var font;
            try { font = localStorage.getItem('uom-sphinx-font'); } catch (e) { }
            if (font === null || font === undefined) { return font = "font-roboto"; }
            else {return font;}
        }
    
        function set_font(previousFont, store = true) {
    
            if (previousFont === "font-roboto") {
                font = "font-opendyslexic";
            } else if (previousFont === "font-opendyslexic") {
                font = "font-roboto";
            } else 
            {   // something has gone wrong! Set roboto as default font
                font = "font-roboto";
            }

            if (font === "font-opendyslexic") {
                html.classList.remove('font-alt');
                body.classList.remove('font-alt');
            } else {
                html.classList.add('font-alt');
                body.classList.add('font-alt');
            }

            if (!store) { // seems to be the wrong way round! Not clear why this is
                try { localStorage.setItem('uom-sphinx-font', font); } catch (e) { }
            }
            
        }

        fontToggleButton.addEventListener('click', function () {
            var font = get_font();
            set_font(font, false);       
        });

})();