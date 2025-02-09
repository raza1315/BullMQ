const {Worker}=require("bullmq");
console.log("Started the worker/consumer that listens the email-queue...");

const sendEmail=(ms)=>new Promise((res,rej)=> setTimeout(()=> res(),ms*1000));

const worker=new Worker("email-queue",async(job)=>{
console.log("Message received id: ",job.id);
console.log("5s Waiting...")
await sendEmail(5);
console.log("Message is: ",job.data);
},
{
connection:{
host:"localhost",
port:6379
}
}
);

