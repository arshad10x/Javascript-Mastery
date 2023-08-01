// Async JS

const datas=[
    {name:"arsh",Profession:'UI Developer'},
    {name:"arshad",Profession:'UI Developer'}
];

function getDatas(){
    setTimeout(()=>{
        let output="";
        datas.forEach((data,index)=>{
            output+=`<li>${data.name + " - " +  data.Profession}</li>`
        })
        document.body.innerHTML=output
    },1000) 
}

function createData(newData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newData);
            let error=false;
            if(!error){
                resolve();
            }else{
                reject("Wrong")
            }
        },2000)
    })
}

/*createData({name:"Asim", Profession:"UI Developer"})
.then(getDatas)
.catch(err=>console.log(err));
*/

// Async & Await

async function start(){
   await createData({name:"Asim", Profession:"UI Developer"})
   getDatas();
}
start()