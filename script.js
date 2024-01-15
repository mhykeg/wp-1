// #1 Custom Text -- Greeting Text Input Changes
document.getElementById("greeting-text-input").onchange = function() {changeGreetingText()}
function changeGreetingText() {
    let greetingTextInput = document.getElementById("greeting-text-input");
    let newGreetingText = document.getElementById("greeting");
    newGreetingText.innerHTML = greetingTextInput.value;
    newGreetingText.setAttribute("contenteditable", "true");
    newGreetingText.style.visibility = "visible";
}

document.getElementById("greeting-font").onchange = function() {changeGreetingFont()}
function changeGreetingFont() {
    let fontChoice = document.getElementById("greeting-font");
    let newFontGreeting = document.getElementById("greeting");
    newFontGreeting.style.fontFamily = fontChoice.value;
}

document.getElementById("greeting-font-size").onchange = function() {changeGreetingFontSize()}
function changeGreetingFontSize() {
    let fontSizeChoice = document.getElementById("greeting-font-size");
    let newFontSizeGreeting = document.getElementById("greeting");
    newFontSizeGreeting.style.fontSize = `${fontSizeChoice.value}px`;
}

document.getElementById("greeting-font-color").onchange = function() {changeGreetingFontColor()}
function changeGreetingFontColor() {
    let colorChoice = document.getElementById("greeting-font-color");
    let newFontColorGreeting = document.getElementById("greeting");
    newFontColorGreeting.style.color = colorChoice.value;
}

// #1 Custom Text -- Signoff Text Input Changes
document.getElementById("signoff-input").onchange = function() {changeSignoff()}
function changeSignoff() {
    let signoffTextInput = document.getElementById("signoff-input");
    let signoffText = document.getElementById("signoff");
    signoffText.innerHTML = signoffTextInput.value;
    signoffText.setAttribute("contenteditable", "true");
    signoffText.style.visibility = "visible";
}

document.getElementById("signoff-font").onchange = function() {changeSignoffFont()}
function changeSignoffFont() {
    let fontChoice = document.getElementById("signoff-font");
    let newFontSignoff = document.getElementById("signoff")
    newFontSignoff.style.fontFamily = fontChoice.value;
}

document.getElementById("signoff-font-size").onchange = function() {changeSignoffFontSize()}
function changeSignoffFontSize() {
    let fontSizeChoice = document.getElementById("signoff-font-size");
    let newFontSizeSignoff = document.getElementById("signoff");
    newFontSizeSignoff.style.fontSize = `${fontSizeChoice.value}px`;
}

document.getElementById("signoff-font-color").onchange = function() {changeSignoffFontColor()}
function changeSignoffFontColor() {
    let colorChoice = document.getElementById("signoff-font-color");
    let newFontColorSignoff = document.getElementById("signoff")
    newFontColorSignoff.style.color = colorChoice.value;
}

// #2 Custom Design Functions
document.getElementById("design-button").onclick = function() {randomDesign()}
function randomDesign() {
    let designArray = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png','7.png', '8.png', '9.png',];
    let randomDesign = Math.floor(Math.random()*9-1);
    let newDesign = document.getElementById("design");
    newDesign.style.backgroundColor = "rgba(255,255,255,0)";
    newDesign.style.backgroundImage = `url(${designArray[randomDesign]})`;
    newDesign.style.backgroundSize = "cover";
}

document.getElementById("design-choice").onclick = function() {chooseDesign()}
function chooseDesign() {
    let designArray = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png','7.png', '8.png', '9.png',];
    let designChoice = document.getElementById("design-choice").value - 1;
    let newDesign = document.getElementById("design");
    newDesign.style.backgroundColor = "rgba(255,255,255,0)";
    newDesign.style.backgroundImage = `url(${designArray[designChoice]})`;
    newDesign.style.backgroundSize = "cover";
}

document.getElementById("design-input").onchange = function() {displayDesign()}
function displayDesign() {
    let inputFile = document.getElementById("design-input");
    let imageLink = URL.createObjectURL(inputFile.files[0]);
    let newDesignBackground = document.getElementById("design");
    newDesignBackground.style.backgroundImage = `url(${imageLink})`;
    newDesign.style.backgroundSize = "cover";
}

// #3 Custom Logo Function
document.getElementById("file-input").onchange = function() {displayImage()}
function displayImage() {
    let inputFile = document.getElementById("file-input");
    let imageLink = URL.createObjectURL(inputFile.files[0]);
    let clientImage = document.getElementById("clientimage");
    clientImage.style.backgroundImage = `url(${imageLink})`;
    clientImage.innerHTML = "";
    clientImage.style.border = "none";
    clientImage.style.visibility = "visible";
}


// Drag Function for Elements
function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;;        
    }
}

// Drag Function -- Signoff Text
let signoffElement = document.getElementById('signoff')
signoffElement.addEventListener("click", signoffDragFunction);
function signoffDragFunction() {
    let signoffElement = document.getElementById('signoff')
    dragElement(signoffElement);
}

// Drag Function -- Greeting Text
let greetingElement = document.getElementById('greeting')
greetingElement.addEventListener("click", greetingDragFunction);
function greetingDragFunction() {
    let greetingElement = document.getElementById('greeting')
    dragElement(greetingElement);
}

// Drag Function -- Client Image
let clientImageElement = document.getElementById('clientimage')
clientImageElement.addEventListener("click", clientImageDragFunction);
function clientImageDragFunction() {
    let clientImageElement = document.getElementById('clientimage')
    dragElement(clientImageElement);
}


// Null Function -- Remove Buttons
function nullButton(elmnt) {
    elmnt.style.visibility = "hidden";
}

// Null Function -- Remove Greeting Text
let nullGreeting = document.getElementById("null-greeting-button")
nullGreeting.addEventListener("click", nullGreetingFunction)
function nullGreetingFunction() {
    let greetingText = document.getElementById("greeting");
    nullButton(greetingText);
}

// Null Function -- Remove Signoff Text
let nullSignoff = document.getElementById("null-signoff-button")
nullSignoff.addEventListener("click", nullSignoffFunction)
function nullSignoffFunction() {
    let signoffText = document.getElementById("signoff");
    nullButton(signoffText);
}

// Null Function -- Remove Background Design
let backgroundDesign = document.getElementById("null-design-button")
backgroundDesign.addEventListener("click", nullDesignFunction)
function nullDesignFunction() {
    let designBackground = document.getElementById("design");
    designBackground.style.backgroundColor = "rgba(255,255,255,0)";
    designBackground.style.backgroundImage = "none";
}

// Null Function -- Remove Logo
let nullLogo = document.getElementById("null-logo-button")
nullLogo.addEventListener("click", nullLogoFunction)
function nullLogoFunction() {
    let clientImage = document.getElementById("clientimage");
    nullButton(clientImage);
}


// Export Button Click
document.getElementById("export-button").addEventListener("click", function() {
    let finalDesign = document.getElementById("design");
    finalDesign.style.border = "none";
    html2canvas(finalDesign).then(canvas => {
        // Get image data URL
        let imageDataURL = canvas.toDataURL("image/png");  // Adjust image format if needed
      
        // Create a link to download the image
        let link = document.createElement("a");
        link.download = "final-design.png";  // Set desired filename
        link.href = imageDataURL;
      
        // Trigger the download
        link.click();
      });
      finalDesign.style.border = "2px dotted goldenrod";
  });