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

function createData(newData,callback){
    return new Promise((resolve,reject)=>{

    })
    setTimeout(()=>{
        datas.push(newData);
        callback();
    },2000)
}

createData({name:"Asim", Profession:"UI Developer"});
