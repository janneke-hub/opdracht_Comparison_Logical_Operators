const age = 20;
const isFemale = true;
const driverStatus = "bob";
var firstName = "Sarah"; "Bram";
var totalAmount = 105;

if (age >= 18) {
    console.log("Je mag naar binnen");
} else {
    console.log("Nope, je mag niet naar binnen");
}

if (isFemale) {
    console.log("Je ticket zegt dat je een vrouw bent!");
} else {
    console.log(
        "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen"
    );
}

if (driverStatus === "bob") {
    console.log("Je bent de bob, je mag autorijden");
} else {
    console.log("Je bent geen bob, hier met die autosleutels");
}

if (age >=18 && age <=25) {
    console.log("Je krijgt 25% korting");
} else {
    console.log("Je krijgt geen korting.");
}

if (firstName = "Sarah" || "Bram") {
    console.log("Je krijgt een gratis biertje");
} else {
    console.log("Je krijgt geen gratis biertje.");
}

if (totalAmount >25) {
    console.log("Je krijgt gratis (vega)bitterballen");
} else if (totalAmount >50) {
    console.log("Je krijgt gratis portie nachos");
} else if (totalAmount >100) {
    console.log("Je krijgt een gratis flesje champagne");
}
