const {Queue}=require("bullmq");
const notifQueue=new Queue('email-queue');
const init=async()=>{

const res=await notifQueue.add("Email to Raza",{
email:"razasfs2003@gmail.com",
subject:"Welcome",
body:"Welcome to body!"
})
console.log("Job Added to Queue",res.id);
}

//call the init function that adds the message to notifQueue:
init();
