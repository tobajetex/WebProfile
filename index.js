const submitBtn = document.getElementById("btn")
const inputEmail = document.getElementById("input-email")
const inputText = document.getElementById("input-text")
const inputFile = document.getElementById("input-file")
submitBtn.addEventListener("click" , handleUploadImg)


function handleUploadImg(event){
    event.preventDefault()
    let  avatarImg =document.getElementById("avatar-img")
     const file = inputFile.files[0]; // Get the selected file
if(inputText.value.trim()!== "" && inputEmail.value.trim() !== ""){
    console.log(true)
    
  if (file) {
    const reader = new FileReader();

    reader.onload = function () {
      avatarImg.src = reader.result;
      
    };

    reader.readAsDataURL(file);
    updatedHeadingText()
  }
  
}
    
}

function updatedHeadingText(){
    let updatedHeading = document.getElementById("heading-text")
    updatedHeading.innerHTML= `${inputText.value} you look great`
   updatedHeading.style.textTransform="uppercase" 
    inputText.value
}