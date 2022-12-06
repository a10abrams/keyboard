const keyboard = {
    /*keeps track of all elements / keys */
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    /*callback functions*/
    eventHandlers: {
        oninput: null,
        onclose: null
    },

    /*holds values for current state of keyboard*/
    properties: {
        value: "",
        capsLock: false
    },

    /* initalize keyboard */
    init() {
        // create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div")

        //set up main elements
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(
            ".keyboard__key"
        )

        //add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        //automatically use keyboard for all textarea elements
        document.querySelectorAll("textarea").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                })
            });
        });
        
        //use keyboard for all input elements
        document.querySelectorAll("input").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                })
            });
        });
        
    },

    /* create keys via html */
    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
            "123", "space", "lang"
        ];
        //creates html for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        }

        //creates line breaks between lines on the board; physical formatting
        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

        //add attributes and classes
        keyElement.setAttribute("type", "button");
        keyElement.classList.add("keyboard__key");
        
        //based on key being looped, there are conditions:
        switch (key) {
            case "1":
                keyElement.classList.add("keyboard__key--accent_2");
                keyElement.innerHTML = "1";

                //what inputs 1;
                keyElement.addEventListener("click", () => {
                    this.properties.value += "1";
                    this._triggerEvent("oninput");
                });
                break;

            case "2":
                keyElement.classList.add("keyboard__key--accent_2");
                keyElement.innerHTML = "2";

                //what inputs 2;
                keyElement.addEventListener("click", () => {
                    this.properties.value += "2";
                    this._triggerEvent("oninput");
                });
                break;

            case "3":
                keyElement.classList.add("keyboard__key--accent_2");
                keyElement.innerHTML = "3";

                //what inputs 3;
                keyElement.addEventListener("click", () => {
                    this.properties.value += "3";
                    this._triggerEvent("oninput");
                });
                break;

            case "4":
                keyElement.classList.add("keyboard__key--accent_2");
                keyElement.innerHTML = "4";

                //what inputs 1;
                keyElement.addEventListener("click", () => {
                    this.properties.value += "4";
                    this._triggerEvent("oninput");
                });
                break;

            case "5":
                keyElement.classList.add("keyboard__key--accent_2");
                keyElement.innerHTML = "1";

                //what inputs 5;
                keyElement.addEventListener("click", () => {
                    this.properties.value += "5";
                    this._triggerEvent("oninput");
                });
                break;

            case "6":
                keyElement.classList.add("keyboard__key--accent_2");
                keyElement.innerHTML = "6";

                //what inputs 6;
                keyElement.addEventListener("click", () => {
                    this.properties.value += "6";
                    this._triggerEvent("oninput");
                });
                break;
            
            case "7":
                keyElement.classList.add("keyboard__key--accent_2");
                keyElement.innerHTML = "7";

                //what inputs 7;
                keyElement.addEventListener("click", () => {
                    this.properties.value += "1";
                    this._triggerEvent("oninput");
                });
                break;
            
            case "8":
                keyElement.classList.add("keyboard__key--accent_2");
                keyElement.innerHTML = "8";

                //what inputs 8;
                keyElement.addEventListener("click", () => {
                    this.properties.value += "8";
                    this._triggerEvent("oninput");
                });
                break;

            case "9":
                keyElement.classList.add("keyboard__key--accent_2");
                keyElement.innerHTML = "9";

                //what inputs 9;
                keyElement.addEventListener("click", () => {
                    this.properties.value += "9";
                    this._triggerEvent("oninput");
                });
                break;

            case "0":
                keyElement.classList.add("keyboard__key--accent_2");
                keyElement.innerHTML = "0";

                //what inputs 1;
                keyElement.addEventListener("click", () => {
                    this.properties.value += "0";
                    this._triggerEvent("oninput");
                });
                break;
            
             case "-":
                keyElement.classList.add("keyboard__key--accent_1");
                keyElement.innerHTML ="-";
        
                //this is what spaces
                keyElement.addEventListener("click", () => {
                    this.properties.value += "-";
                    this._triggerEvent("oninput");
                })
                break;
            
             case "=":
                keyElement.classList.add("keyboard__key--accent_1");
                keyElement.innerHTML ="=";
        
                //this is what spaces
                keyElement.addEventListener("click", () => {
                    this.properties.value += "=";
                    this._triggerEvent("oninput");
                })
                break;

            case "q":
                keyElement.classList.add("keyboard__key--accent_1");
                keyElement.innerHTML = "q";

                //what inputs "q"
                keyElement.addEventListener("click", () => {
                    this.properties.value += "q";
                    this._triggerEvent("oninput");
                });
                break;
            case "r":
                keyElement.classList.add("keyboard__key--accent_1");
                keyElement.innerHTML = "r";
    
                //what inputs "r"
                keyElement.addEventListener("click", () => {
                    this.properties.value += "r";
                    this._triggerEvent("oninput");
                });
                break;

            case "t":
                keyElement.classList.add("keyboard__key--accent_1");
                keyElement.innerHTML = "t";

                //what inputs "t"
                keyElement.addEventListener("click", () => {
                    this.properties.value += "t";
                    this._triggerEvent("oninput");
                });
                break;
                
            case "y":
                keyElement.classList.add("keyboard__key--accent_1");
                keyElement.innerHTML = "y";

                //what inputs "y"
                keyElement.addEventListener("click", () => {
                    this.properties.value += "y";
                    this._triggerEvent("oninput");
                });
                break;
                
            case "backspace":
                keyElement.classList.add("keyboard__key--wide", "keyboard__key--accent_1");
                keyElement.innerHTML = createIconHTML("backspace");

                //this is what "deletes"
                keyElement.addEventListener("click", () => {
                    this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1)
                    this._triggerEvent("oninput");
                })
                break;

            case "tab":
                keyElement.classList.add("keyboard__key--wide");
                keyElement.innerHTML = createIconHTML("keyboard_tab");

                //this is what "tabs"
                keyElement.addEventListener("click", () => {
                    this.properties.value += "    ";
                    this._triggerEvent("oninput");
                })
                break;

            case "caps":
                keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                keyElement.innerHTML = createIconHTML("keyboard_capslock");
    
                //this is what capitalizes and changes the circle color
                keyElement.addEventListener("click", () => {
                    this._toggleCapsLock();
                    keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                });
                break;
             
            case "a":
                keyElement.classList.add("keyboard__key--accent_3");
                keyElement.innerHTML = "a";

                //what inputs "a"
                keyElement.addEventListener("click", () => {
                    this.properties.value += "a";
                    this._triggerEvent("oninput");
                });
                break;

            case "s":
                keyElement.classList.add("keyboard__key--accent_3");
                keyElement.innerHTML = "s";

                //what inputs "s"
                keyElement.addEventListener("click", () => {
                    this.properties.value += "s";
                    this._triggerEvent("oninput");
                });
                break;

            case "h":
                keyElement.classList.add("keyboard__key--accent_3");
                keyElement.innerHTML = "h";

                //what inputs "h"
                keyElement.addEventListener("click", () => {
                    this.properties.value += "h";
                    this._triggerEvent("oninput");
                });
                break;

            case "j":
                keyElement.classList.add("keyboard__key--accent_3");
                keyElement.innerHTML = "j";

                //what inputs "j"
                keyElement.addEventListener("click", () => {
                    this.properties.value += "j";
                    this._triggerEvent("oninput");
                });
                break;

            case "k":
                keyElement.classList.add("keyboard__key--accent_3");
                keyElement.innerHTML = "k";

                //what inputs "k"
                keyElement.addEventListener("click", () => {
                    this.properties.value += "k";
                    this._triggerEvent("oninput");
                });
                break;

            case "enter":
                keyElement.classList.add("keyboard__key--wide");
                keyElement.innerHTML = createIconHTML("keyboard_return");
        
                //this is what pushes to a new line
                keyElement.addEventListener("click", () => {
                    this.properties.value += "\n"
                    this._triggerEvent("oninput");
                })
                break;
                
            case "done":
                keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                keyElement.innerHTML = createIconHTML("check_circle");
                
                //this is what closes the keyboard
                keyElement.addEventListener("click", () => {
                    this.close();
                    this._triggerEvent("onclose");
                });
                break;
            case "z":
                keyElement.classList.add("keyboard__key--accent_4");
                keyElement.innerHTML = "z";

                //what inputs "z"
                keyElement.addEventListener("click", () => {
                    this.properties.value += "z";
                    this._triggerEvent("oninput");
                });
                break;
            
            case "x":
                keyElement.classList.add("keyboard__key--accent_4");
                keyElement.innerHTML = "x";

                //what inputs "x"
                keyElement.addEventListener("click", () => {
                    this.properties.value += "x";
                    this._triggerEvent("oninput");
                });
                break;
            
            case "c":
                keyElement.classList.add("keyboard__key--accent_4");
                keyElement.innerHTML = "c";

                //what inputs "c"
                keyElement.addEventListener("click", () => {
                    this.properties.value += "c";
                    this._triggerEvent("oninput");
                });
                break;
            
            case "b":
                keyElement.classList.add("keyboard__key--accent_4");
                keyElement.innerHTML = "b";

                //what inputs "b"
                keyElement.addEventListener("click", () => {
                    this.properties.value += "b";
                    this._triggerEvent("oninput");
                });
                break;

            case "n":
                keyElement.classList.add("keyboard__key--accent_4");
                keyElement.innerHTML = "n";

                //what inputs "n"
                keyElement.addEventListener("click", () => {
                    this.properties.value += "n";
                    this._triggerEvent("oninput");
                });
                break;
            
            case "m":
                keyElement.classList.add("keyboard__key--accent_4");
                keyElement.innerHTML = "m";

                //what inputs "m"
                keyElement.addEventListener("click", () => {
                    this.properties.value += "m";
                    this._triggerEvent("oninput");
                });
                break;
            
            case "?":
                keyElement.classList.add("keyboard__key--qmark");
                keyElement.innerHTML = "?";

                //what inputs "?"
                keyElement.addEventListener("click", () => {
                    this.properties.value += "?";
                    this._triggerEvent("oninput");
                });
                break;

            case "123":
                keyElement.classList.add("keyboard__key--wide");
                keyElement.innerHTML = createIconHTML("emoji_symbols");

                break;
            
             case "space":
                keyElement.classList.add("keyboard__key--extra-wide", "keyboard__key--accent_2");
                keyElement.innerHTML = createIconHTML("space_bar");
        
                //this is what spaces
                keyElement.addEventListener("click", () => {
                    this.properties.value += " ";
                    this._triggerEvent("oninput");
                })
                break;

            case "lang":
                keyElement.classList.add("keyboard__key--wide");
                keyElement.innerHTML = createIconHTML("translate");

                break;
    
            default:
                keyElement.textContent = key.toLowerCase();
    
                //this defaults all input to lowercase // changes to uppercase for capslock
                keyElement.addEventListener("click", () => {
                    this.properties.value += this.properties.capslock ? key.toUpperCase () : key.toLowerCase();
                    this._triggerEvent("oninput");
                })
                break;
        }

        fragment.appendChild(keyElement);

        if (insertLineBreak) {
            fragment.appendChild(document.createElement("br"));
        }
    });

        return fragment;
    },

    /* trigger one of the callback functions */
    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toggleCapsLock() {
        //the logic behind this is to flip the current case of the letters
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue  || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
    }
}

window.addEventListener("DOMContentLoaded", function () {
    keyboard.init();
});
