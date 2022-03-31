

/*function cal1(myPrice,taxAmount){
	var price = myPrice;
	var devide = price / 100;
	var totalTax = devide * taxAmount;
	var sellingPrice = price + totalTax;
	
	//document.write("Total Price: " + sellingPrice);
	return "Total Price: "+ sellingPrice + " /=";
}


document.getElementById("demo").innerHTML= cal1(1000,2);*/



function timeNow(){
	dateObject = new Date();
	var realTimeNow = dateObject.getHours() + ":" + dateObject.getMinutes() + ":" + dateObject.getSeconds() + " PM";
	document.querySelector(".demo").innerHTML= realTimeNow;
}

setInterval(timeNow,1000);





/*document.querySelector(".btn").addEventListener("click",function(){
	var box=document.querySelector(".menu-bar");
	if(box.style.right=="-200px")
		{
			box.style.right="0";
		}
	else{
		box.style.right="-200px";
	}
})*/






var len = document.querySelectorAll(".trialButton").length;

for(var i=0; i<len; i++){
	document.querySelectorAll(".trialButton")[i].addEventListener("click", function(){
		var text = this.innerHTML;
		document.querySelector("h1").innerHTML = text + " is clicked";
	})
}




/* es-6 javascript learning start here */


/*let x = 20;
let y = 30;

let sum = x+y;

console.log(`The sum is ${sum}/=`);*/




/*const add = (x,y) => {
	let sum = x+y;
	console.log(`The total ${sum}/=`);
}

add(20,30);*/




/*let numbers = [10,20,30,40,50];

let sum = 0;

numbers.forEach(function(i){
	console.log(i);
	sum = sum+i;
})

console.log(`total sum= ${sum}`);*/






/* js calsulator from here */


var num1 = document.querySelector(".num1");
var num2 = document.querySelector(".num2");
var result = document.querySelector(".result");

function action(operator){
	var a = parseInt(num1.value);
	var b = parseInt(num2.value);
	
	switch(operator){
			case "+":
			result.innerHTML = a+b;
			break;
			
			case "-":
			result.innerHTML = a-b;
			break;
			
			case "*":
			result.innerHTML = a*b;
			break;
			
			case "/":
			result.innerHTML = a/b;
			break;
			
			case "ac":
			result.innerHTML = null;
			num1.value = null;
			num2.value = null;
	}
}




// var sum = 0;

// for(var i = 1; i<=5; i++){
// 	console.log(sum+" + "+i+" = " + (sum+i));
// 	sum = sum+i;
// }

// console.log("Total result = " + sum);






