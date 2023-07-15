   const password ='984532';
        let num =prompt("enter password")   
        
    if(password == num){
        
        alert("ok")

    }else if(password != num){
        alert("enter again")
        close()
    }



    function  exit() {
if(event.ctrlKey && event.shiftKey && event.key === "Q"){

window.close()

}}



let vidc=document.createElement('div')
document.body.appendChild(vidc)
vidc.className='colles'


let collection=['RmzYL9wOj8tdw20',
'WpdBrjmqlACbxzq',
'JyjRk4zLOASjKGo',
'dp3M1yGa02UkR0y',
'b1lzb1kdykFPbGd',
'PbXle3zG9Dt0O76',
'dOg7BmbKzJh9Yj',
'K0YZ1rORjVS06BG']


for (let inde = 0; inde < collection.length; inde++) { 
   
    let vid=document.createElement('a')
    vidc.appendChild(vid)
    vid.className='colle'
    vid.target='videosplay'
    vid.innerText=`video${inde}`
    vid.href=`https://streamtape.com/e/${collection[inde]}/`
      
}

const R=Math.floor(Math.random()*256)
const G=Math.floor(Math.random()*256)
const B=Math.floor(Math.random()*256)


let back=document.querySelector('body')
back.style.background=` rgb(${R}, ${G}, ${B})`
