const fs=require('fs')
const replaceThis="harry"
const replacewith="john"
const preview=false

try{
    fs.readdir("data",(err,data)=>{
        for(let index=0;index<data.length;index++){
            const item=data[index];
            let newFile="data/"+item.replaceAll(replaceThis,replacewith)
            if(!preview){
                fs.rename("data/"+item,newFile,()=>{
                    console.log("rename Success")
                })
            }
            else{
                console.log(item + ' will rename to '+ item.replaceAll(replaceThis,replacewith))
            }
        }
    })
}catch(err){
    console.log(err);
}