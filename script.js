let verb = document.getElementById("verb")  //header tag
const prateritum = document.getElementById("prateritum")  //input tag
const perfektum = document.getElementById("perfektum")    //input tag
const button = document.getElementById("check") //button tag
const prateritumCorrection = document.getElementById("prateritum-correction") //p tag
const perfektumCorrection = document.getElementById("perfektum-correction") //p tag   

//onload
let randInt = Math.floor(Math.random() * data.length)
verb.innerHTML = data[randInt][0]



function main() {
  
  if (button.innerHTML === "Zkontrolovat") {
      button.innerHTML = "Další Sloveso"
      if (prateritum.value === data[randInt][1]) {
        prateritum.style.backgroundColor = "lightgreen"
      }
      else {
        prateritum.style.backgroundColor = "coral"
        prateritumCorrection.innerHTML = data[randInt][1]
      }
      if (perfektum.value === data[randInt][2]) {
        perfektum.style.backgroundColor = "lightgreen"
      }
      else {
        perfektum.style.backgroundColor = "coral"
        perfektumCorrection.innerHTML = data[randInt][2]
      }
  }

  else if (button.innerHTML === "Další Sloveso") {
    prateritum.style.backgroundColor = "white"
    perfektum.style.backgroundColor = "white"
    prateritumCorrection.innerHTML = "​"
    perfektumCorrection.innerHTML = "​"
    prateritum.value = ""
    perfektum.value = ""

    randInt = Math.floor(Math.random() * data.length)
    verb.innerHTML = data[randInt][0]
    button.innerHTML = "Zkontrolovat"
  }

  
}

document.addEventListener("keypress", event => {
  if (event.code === "Enter") {
    main()
  }
})