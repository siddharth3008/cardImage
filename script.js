let main=document.getElementById("main");
let arr=["https://i.pinimg.com/474x/c4/09/40/c40940e67d9a920e4be5781d723f15fb.jpg",
    "https://i.pinimg.com/236x/dd/62/26/dd622689aa52b77629e93a083257b276.jpg",
    "https://i.pinimg.com/236x/ba/74/6a/ba746a5ad203704cbac746f2c23314da.jpg",
    "https://i.pinimg.com/236x/af/d3/40/afd3403aae501fa52845d82b30d93dd7.jpg",
    "https://i.pinimg.com/236x/60/6d/8c/606d8cea6d24e23e94c3adaf0aa037cd.jpg",
    "https://i.pinimg.com/564x/2d/b6/7f/2db67ff679f177dde48b0879384f0a38.jpg"];

let s=""; 
for(let i=1;i<=100;i++)
{
    let r=Math.floor(Math.random()*arr.length);
    s+=`<div class="card"><img src=${arr[r]}></div>`;
        
}
main.innerHTML=s;