function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
	var years = parseInt(document.getElementById("years").value);
	
	var date = new Date();
	var future_year = years + date.getFullYear();
	var interest = principal * years * rate / 100
	
	//clear
	document.getElementById("result_span").innerHTML = '';
	
	//validation
	if (principal <= 0) {
		alert("Please enter a positive amount for Amount");
		document.getElementById("principal").focus();
		return;
	}
	
	//display
	document.getElementById("result_span").innerHTML = '<br><BR>If you deposit <mark>$'+principal+
														'</mark>, <br>at an interest rate of <mark>'+rate+
														'%</mark>, <br>you will recive an amount of <mark>$'+interest+
														'</mark>, <br>in the year <mark>'+future_year+'</mark>.';
}
		
function disp_rate_range() {
	var val = document.getElementById("rate").value;
	document.getElementById("rate_span").innerHTML = val + "%";
	
	
}