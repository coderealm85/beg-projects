const inpuTextArea = document.getElementById("input-textarea");
const characCount = document.getElementById("char-count");
const wordsCount = document.getElementById("word-count");

inpuTextArea.addEventListener("input",()=>{

    
    characCount.textContent = inpuTextArea.value.length;

   

    const txt = inpuTextArea.value.trim();
    const wordArray = txt.split(/\s+/);

    let wordCountValue = 0;
    for(let i = 0; i < wordArray.length; i++){
        if(wordArray[i] != ""){
            wordCountValue++;
        }    
    }
    wordsCount.textContent = wordCountValue;

});