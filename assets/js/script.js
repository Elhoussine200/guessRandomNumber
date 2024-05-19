
let Min, Max, Tries

document.getElementById("Min").value = "1"
document.getElementById("Max").value = "10"
document.getElementById("Tries").value = "5"
const g = new Game()
function StartNewGame() {
    Min = document.getElementById("Min").value
    Max = document.getElementById("Max").value
    Tries = document.getElementById("Tries").value
    ErrorDiv = document.getElementById("Error")

    if (ValidateGameSettings(Min, Max, Tries)) {
        ErrorDiv.innerHTML = ""
        g.settings.min = Number(Min)
        g.settings.max = Number(Max)
        g.settings.triesLeft = Number(Tries)

        g.start()
        setActiveScreen("roundQuestion")

    }
    else {
        if (settingErrors.length > 0) {

            htmlError = `<ul console.log(images)
            class="errMsg">`
            for (let msg of settingErrors) {
                htmlError += `<li>${msg}</li>`
            }
            htmlError += "</ul>"
            ErrorDiv.innerHTML = htmlError
        }
    }
}

let settingErrors = []

function ValidateGameSettings(Min, Max, Tries) {
    let isValid = true
    if (Min == "" || Max == "" || Tries == "") return false
    settingErrors = []
    //make Sure all Values are valid Numbers
    if (!isNaN(Min) && !isNaN(Max) && !isNaN(Tries)) {
        if (Min < 0) {
            settingErrors.push("Minimum value must be positive Number and Not " + Min)
            isValid = false
        }
        if (Number(Max) <= Number(Min)) {
            settingErrors.push("Max Must be Greater than Min")
            isValid = false
        }
        if (Tries <= 0) {
            settingErrors.push("Number Of Tries Must be Positive")
            isValid = false
        }
    }

    return isValid
}
function setActiveScreen(imgId) {
    //Remove class active from all images

    let images = document.getElementsByTagName("img")
    for (let img of images) {
        if (img.id == imgId) {
            img.classList.add("active")
        }
        else {
            img.classList.remove("active")
        }

    }

}
function Verify() {
    const guess = document.getElementById("guess").value
    if (!isNaN(guess)){
          setActiveScreen(  g.playRound(guess))
    }

}


