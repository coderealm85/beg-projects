function updateHeightValue(value){
document.getElementById("height-value").textContent=value;
}
function updateWeightValue(value){
    document.getElementById("weight-value").textContent=value;
}
function calculateBMI(){
    const height=document.getElementById("height").value;
    const weight=document.getElementById("weight").value;
    const age=document.getElementById("age").value;
    const gender=document.querySelector("input[name='gender']:checked");
    if(!age|| !gender){
        alert("please fill in all the fields")
    }
    const bmi=(weight/((height/100))**2).toFixed(2);
    document.getElementById("bmi-result").textContent=bmi;
    let category="";
    if(bmi<18.5){
        category="get some nutrition bro 🍎🍒🍐🥝🍋‍🟩🫐 (Underweight)";
    }
    else if(bmi<24.9){
        category="You are healty💪 (Normal weight)";
    }
    else if(bmi<29.9){
       category="Hit the gym rn 💀(Overweight)"; 
    }
    else{
        category="Focus on your health 👨‍⚕(Obese)";
    }
    document.getElementById("bmi-category").textContent=category;
}