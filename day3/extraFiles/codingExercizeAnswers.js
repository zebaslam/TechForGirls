//Answers to the coding exercizes on the power point from day 3


//Return statement 1
// Pythagorean theorem. Write a function that takes in the length of side a and b and return the length of side c. 
//You math want to use Math.sqrt(value) to find the square root of a value. 
 function pythag(a, b) {
   	 cSquared= a*a +b*b;  //a squared + b squared = c squared 
   	 return Math.sqrt(cSquared); //return c, the sqrt of c^2
}

//Return statement 2 
//Create a function that calculates the total price of ice cream. 
//This function will take in the amount of ice cream a person is ordering and return the cost of the total order. Each ice cream costs $4.50. 
function iceCreamCost(amountOfIceCream) {
	return 4.5 * amountOfIceCream; //amount of ice cream * 4.5 (the price)
}


//Return statement 3
//Create another function that takes in the price of the ice cream and returns the tip amount. You are tipping 18% for the ice cream. 
function tipAmount(costOfIceCream){ 
	return costOfIceCream * .18; //tip is 18% (.18) of the total cost 
}

//Return statement 4 
//Create a function similar to the tip one that computes the tax. It will take in the total price and return the tax, given that tax rate of 9%. 
function taxAmount(costOfIceCream){
	return costOfIceCream * .09; //tax is 09% (.09) of the total cost 
}

//Return statement 5
//Finally modify the function you wrote in 2 to return the price of the ice cream with the tax and tip from number 3 and 4 also included. 
function iceCreamCost(amountOfIceCream) {
	var price = 4.5 * amountOfIceCream; //calculate the total price 
   	var tip = tipAmount(price);  //calculate the tip calling the tip function 
   	var tax = taxAmount(price);  //calculate the tax amount calling the tax function 
    return price + tip + tax;  //return tax + tip + price
}


//If else 1 
//Write a function that takes in a year and returns true if that year is a leap year. A year is a leap year if: 
//	It is divisible by 4 
//	BUT, if it is also divisible by 100 the year is not a leap year.
//	BUT, if it is also divisible by 400 the year is a leap year. 
function leapYear(year){
	if (year % 400 == 0){ //If it is divisible by 400 it is a leap year 
    	return true; //will return here and leave the function
    }
    else if (year % 100 == 0) { //otehrwise if it is divisible by 100 then not a leap year  
    	return false; //will return and leave function
    }
    else if (year % 4 == 0) { //if it is divisible by 4 it is a leap year 
    	return true; //return true 
    }
    else{ //random other year return false 
    	return false; 
    }
}

//If else 2
//Write a function that finds the roots from the quadratic formula by taking in a b and c. 
//	1. Find the discriminant (b^2 – 4AC)
//	2. If discriminant is less than 0, root is imaginary, return “Imaginary” 
//	3. If discriminant is equal to 0, roots are equal, return “equal roots with value: <value>” 
//	4. If decrement is more than 0, two real roots, return “root 1 <value1> root 2 <value2>” 
function quadraticFormula(a, b, c){
	var descr = ((b*b) - (4*a*c));  //this is the descirminant 
    if (descr > 0) { //if descriminent greater than 0 we have two real roots 
    	var root1 = (-b + Math.sqrt(descr))/(2*a); //root 1
        var root2 = (-b - Math.sqrt(descr))/(2*a); //root 2
        var result = "root 1: " + root1 + " root 2: " + root2; //result
        return  result; 
    }
    else if (descr == 0){  //if descriminamnt equal to 0 only one rot 
    	var root = -b / (2*a); //root calculation 
        var result = "equal roots with value: " + root; //saves result 
        return result; 
    }
    else { //otherwise, imaginary root 
    	return "Imaginary"; //return its imaginary 
    }

}

//answers also on code pen
//https://codepen.io/anon/pen/PKPxKx?editors=1011