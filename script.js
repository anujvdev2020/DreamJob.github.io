const arr1=['First-slide','Second-slide','Third-slide'];
const arr2=['first-img-slide','second-img-slide','third-img-slide']
let cs=0;
let rightbtn=document.getElementById('right-arrow');
let leftbtn=document.getElementById('left-arrow');

rightbtn.onclick=()=>{
  
    hideElement(cs)
    cs++;
   if(cs===3){
       cs=0;
   }
   
showElement(cs)


}


leftbtn.onclick=()=>{
   hideElement(cs)
   cs--;
   if(cs===-1){
       cs=2;
   }
   showElement(cs)
}
const showElement=(id)=>{
   let pe=document.getElementById(arr1[id]);
   let imge=document.getElementById(arr2[id]);
  
   pe.style.display="block";
   imge.style.display="block";

}
const hideElement=(id)=>{
   let pe=document.getElementById(arr1[id]);
   let imge=document.getElementById(arr2[id]);
  
   pe.style.display="none";
   imge.style.display="none";

}