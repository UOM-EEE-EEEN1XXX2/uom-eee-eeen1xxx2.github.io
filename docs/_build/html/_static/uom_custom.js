(function fonts() {
    var header = document.querySelector('header');
    var body   = document.querySelector('body');
    var footer = document.querySelector('footer');
    var pre = document.querySelector('pre');
    var font_btn1 = document.getElementById("span_uom_alt_font_button1");
    var font_btn2 = document.getElementById("span_uom_alt_font_button2");
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

            header.classList.remove(previousFont);
            header.classList.add(font);
            body.classList.remove(previousFont);
            body.classList.add(font);
            footer.classList.remove(previousFont);
            footer.classList.add(font);
            font_btn1.classList.remove(previousFont);
            font_btn1.classList.add(font);
            font_btn2.classList.remove(font);
            font_btn2.classList.add(previousFont);
            pre.classList.remove(previousFont);
            pre.classList.add(font);

            if (!store) { // seems to be the wrong way round! Not clear why this is
                try { localStorage.setItem('uom-sphinx-font', font); } catch (e) { }
            }
            
        }

        fontToggleButton.addEventListener('click', function () {
            var font = get_font();
            set_font(font, false);       
        });

})();