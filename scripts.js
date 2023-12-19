let firstNo = document.getElementById("fno")
let secondNo = document.getElementById("sno")

let add = document.querySelector("button")
add.addEventListener("click",addition)

function addition(){
    let fino = firstNo.value
    fino = Number.parseInt(fino)

    let seno = secondNo.value
    seno = Number.parseInt(seno)

    document.getElementById("Result").innerHTML= ("Answer : "+(fino+seno))
}

let sub = document.querySelector("#sub")
sub.addEventListener("click",subtraction)

function subtraction(){
    let fno = firstNo.value
    fno = Number.parseInt(fno)

    let sno = secondNo.value
    sno = Number.parseInt(sno)

    document.getElementById("Result").innerHTML=("Answer : "+(fno - sno))

}


let mul = document.querySelector("#mul")
mul.addEventListener("click",multiplication)

function multiplication(){
    let fno = firstNo.value;
    fno = Number.parseInt(fno)

    let sno = secondNo.value;
    sno = Number.parseInt(sno)

    document.getElementById("Result").innerHTML = ("Answer : "+(fno*sno))
}

let div = document.querySelector("#div")
div.addEventListener("click",division)

function division(){
    let fno = firstNo.value;
    fno = Number.parseInt(fno)

    let sno = secondNo.value;
    sno = Number.parseInt(sno)
    
    document.getElementById("Result").innerHTML = ("Answer : "+(fno/sno))

}