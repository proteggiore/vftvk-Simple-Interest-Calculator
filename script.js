function compute()
{
    //get prinncipal from form
    var principal = document.getElementById("principal").value;
    //give error if principal is 0 or lower
    if(parseInt(principal)<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    //get rate and years
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //calculate interest
    var interest = principal*years*rate/100;
    //calcualte year of maturity
    var year = new Date().getFullYear() + parseInt(years)

    //collect reference to result handler
    var result = document.getElementById("result");
    //format and display calculated result
    result.innerHTML= "If you deposit <mark>"+principal+
    "</mark>,<br> at an interest rate of <mark>"+ rate +
    "%</mark>.<br> You will receive an amount of <mark>"+ interest +
    "</mark>, <br> in the year <mark>"+year+"</mark>."

}

function updateRate()
{
    //Update text field next to rate slide bar with the value of rate
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}