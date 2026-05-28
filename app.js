// Grundläggande applikation
function greetUser(name) {
    console.log("Hey " + name + ", what's up?");
	  console.log("Greetings, " + name + "! Welcome to the system.");
}

function calculateTotal(price, tax) {
	let total = price + tax;
	return total;
}

function main() {
	greetUser("Student");
	let sum = calculateTotal(100, 25);
	console.log("Total: " + sum);
}

main();