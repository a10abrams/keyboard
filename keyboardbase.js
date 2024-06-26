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

        //add attributes or classes
        keyElement.setAttribute("type", "button");
        keyElement.classList.add("keyboard__key");
        
        //based on key being looped, there are conditions:
        switch (key) {
            case "backspace":
                keyElement.classList.add("keyboard__key--wide");
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

            case "enter":
                keyElement.classList.add("keyboard__key--wide");
                keyElement.innerHTML = createIconHTML("keyboard_return");
        
                //this is what pushes to a new line
                keyElement.addEventListener("click", () => {
                    this.properties.value += "\n"
                    this._triggerEvent("oninput");
                })
                break;
                
            case "space":
                keyElement.classList.add("keyboard__key--wide");
                keyElement.innerHTML = createIconHTML("space_bar");
        
                //this is what spaces
                keyElement.addEventListener("click", () => {
                    this.properties.value += " ";
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
                })
                break;
            
            case "123":
                keyElement.classList.add("keyboard__key--wide");
                keyElement.innerHTML = createIconHTML("emoji_symbols");

                break;

            case "lang":
                keyElement.classList.add("keyboard__key--wide");
                keyElement.innerHTML = createIconHTML("translate");

                break;
    
            default:
                keyElement.textContent = key.toLowerCase();
    
                //this defaults all input to lowercase / changes to uppercase for capslock
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

    _toggleCapsLock () {
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
