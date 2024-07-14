let temp=document.querySelector('#temp');

let ans=document.querySelector('#p');
let button=document.querySelector('#button');

button.addEventListener("click",()=>{
    let input=document.querySelector('input[name="temp"]:checked').value;

    if(input=="C"){
        let a=temp.value;
        let f= a*(9/5) + 32;
        ans.innerHTML=`${f} F`;

    }
    else{
        let f=temp.value;
        let c= (f-32)*5/9;
        ans.innerHTML=`${c} C`;
    }
});

