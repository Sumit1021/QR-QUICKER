
function genrateQR()
{
 //condition to check input
 if (input.value.length > 0) {
   let input = document.getElementById("input");
   let userSize=document.querySelector('.form-select').value
   //api fetch
 fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${userSize}x${userSize}&data=`+input.value)
 .then(response => {
   if (!response.ok) {
     throw new Error('Network response was not ok');
   }
   return response.blob();
 })
 .then(blob => {
   //success
  success(blob);
 })
 .catch(error => {
   console.error('There was a problem ', error);
 });
 }
 else {
  let container=document.querySelector('.col-4')
  input.style.borderBottom = "2px solid red";
   let toast=document.getElementById('error')
   toast.classList.add('show');
  container.style.cssText="height:144px;"
   toastEnd(toast);
 }
}

function success(blob)
{
  //accessing element
  let img=document.getElementById('img')
  let a = document.getElementById("download");
  let container=document.querySelector('.col-4')
  input.style.borderBottom = "2px solid green";
  container.style.cssText="height:470px;margin-top:-20px;"
   //Toast msg
   let toast=document.getElementById('toast')
   toast.classList.add('show');
   toastEnd(toast);
  //inserting url
  img.src=URL.createObjectURL(blob);
  a.href=URL.createObjectURL(blob);
}


//Deleting toast msg
function toastEnd(toast)
{
  setTimeout(()=>{
    toast.classList.remove("show")
  },2000)
}
