const date = new Date()
const hours = date.getHours()

function GreetPerson(name) {  
    let greeting = ""
    if (hours < 12 && hours >= 6) {
        greeting = "morning"
    } else if(hours < 18 && hours >= 12){
        greeting = "afternoon"
    } else if(hours < 00 && hours >= 18){
        greeting = "evening"
    } else{
        greeting = "night"
    }
    console.log(`Good ${greeting}, ${name}`)
}

GreetPerson("Luis")


