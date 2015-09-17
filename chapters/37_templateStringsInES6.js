function templateStringES6 () {
	var name = "Jean",
		lastName = "Troiani",
		firstAndLast = `my name is ${name} and my last name is ${lastName} `;	 
	console.log(firstAndLast);
}
module.exports = templateStringES6;