const functions = require("firebase-functions");

const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
admin.initializeApp();

// exports.sendEmailNotification=functions.firestore.document('cloture/{userId}')
// .onCreate((snap,ctx)=>{
//     const data=snap.data();
 
//     let authData=nodemailer.createTransport({
// // host:'smtp.gmail.com',
// // port:465,
// // secure:true,
// service:"Gmail",
// auth:{
//     user:'safae.seghir2003@gmail.com',
//     pass:'safae2003'
// }
//     });

//     authData.sendMail({
//         from:'safae.seghir2003@gmail.com',
//         to:'$ {data.email}',
//         subject :'sucess',
//         text:'votre ticket est cloturé veuillez la confirmer',
//         html:'$ {data.email}',

//     }).then(res=>
//         console.log("successfully sent that email")
        
//     ).catch(err =>
//         console.log(err))
// })


const transport=nodemailer.createTransport({
    service:"Gmail", 
    auth:{
        user:"safae.seghir2003@gmail.com", 
       pass:"safae2003"
    }
});

exports.EmailNotification=functions.firestore.document("TicketClo/{id}").onCreate((snap,context)=>{
    
    console.log(context)
    const email=snap.data().email;
    const name=snap.data().name;
    const id=snap.data().id;
    return sendEmailNotification(email,name,id);
});

function sendEmailNotification(email,name,id){
    return transport.sendMail({
        from:"safae.seghir2003@gmail.com", 
        to : email, 
        subject:"Ticket Cloturé 👀", 
        html:
        `<h1>Bonjour  ${name}</h1>
        <p>Votre Ticket avec le id ${id} est cloturé veuillez accédez a votre compte pour comfirmer ou réouvrir votre ticket </p>
        <h3>Merci!!</h3>
        `
    }).then(res=>
                console.log(res+"successfully sent that email")
                
            ).catch(err =>
                console.log(err));
        }

