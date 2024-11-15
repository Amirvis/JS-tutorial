let day1 = "saturday";

switch(day1) {
    case "monday":
        console.log("Go to university");
        break;
    case "saturday":
        console.log("Go to cinema");
        break;
    default:
        console.log("Not valid day");
}

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

let day2 = "tuesday";

switch(day2) {
    case "sunday":
    case "tuesday":
    case "thursday":
        console.log("Go to university");
        break;
    case "monday":
    case "wednesday":
    case "friday":
        console.log("Go to work");
        break;
    case "saturday":
        console.log("Go to gym");
        break;
    default:
        console.log("Not valid day");
}

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

let day3 = "wednesday";

// if we wanna write the code above with if statement then it would look like this:

if (day3 === "sunday" || day3 === "tuesday" || day3 === "thursday") {
    console.log("Go to university");
} else if (day3 === "monday" || day3 === "wednesday" || day3 === "friday") {
    console.log("Go to work");
} else if (day3 === "saturday") {
    console.log("Go to gym");
} else {
    console.log("Not valid day"); 
}