document.addEventListener("DOMContentLoaded",function(){
 const investmentInput=document.getElementById("inv");
 const interestRateInput=document.getElementById("int");
 const timePeriodInput=document.getElementById("time");
 investmentInput.addEventListener("input",function (){
updateInvestmentValue(this.value);
 }); 
 interestRateInput.addEventListener("input",function (){
    updateInterestRateValue(this.value);
     }); 
     timePeriodInput.addEventListener("input",function (){
        updateTimePeriodValue(this.value);
         }); 
         updateInvestmentValue(investmentInput.value);
         updateInterestRateValue(interestRateInput.value);
         updateTimePeriodValue(timePeriodInput.value);
 });
 function updateInvestmentValue(value){
  document.getElementById("inv-value").innerText=`₹${parseFloat(value).toLocaleString('en-IN')}`;
 }
 function updateInterestRateValue(value){
    document.getElementById("int-rate-value").innerText=`${parseFloat(value).toFixed(1)}%`
 }
 function updateTimePeriodValue(value){
    document.getElementById("time-period").innerText=`${(value)} years`
 }
function calculateFd(){
    const principle=parseFloat(document.getElementById("inv").value);
    const rateOfInterest=parseFloat(document.getElementById("int").value);
    const timePeriod=parseFloat(document.getElementById("time").value);
    const n=4;
    const totalAmount= principle*Math.pow((1+(rateOfInterest/100)/n),n*timePeriod);
    const interestEarned= totalAmount-principle;
    document.getElementById("invested-amount").innerText=`
    ₹${principle.toLocaleString('en-IN')}`;
    document.getElementById("estimated-returns").innerText=`
    ₹${Math.round(interestEarned).toLocaleString('en-IN')}`;
    document.getElementById("total-value").innerText=`
    ₹${Math.round(totalAmount).toLocaleString('en-IN')}`;

}