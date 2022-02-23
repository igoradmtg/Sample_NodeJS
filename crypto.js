const crypto = require("crypto");
const startDate = Date.now();
crypto.pbkdf2("12hrthrt5","hrthth",1000000,64,'sha512',() => {
    console.log('Thread 1 ended: ',Date.now()-startDate,'seconds');
});
crypto.pbkdf2("12hrthrt5","hrthth",1000000,64,'sha512',() => {
    console.log('Thread 2 ended: ',Date.now()-startDate,'seconds');
});
crypto.pbkdf2("12hrthrt5","hrthth",1000000,64,'sha512',() => {
    console.log('Thread 3 ended: ',Date.now()-startDate,'seconds');
});
crypto.pbkdf2("12hrthrt5","hrthth",1000000,64,'sha512',() => {
    console.log('Thread 4 ended: ',Date.now()-startDate,'seconds');
});
crypto.pbkdf2("12hrthrt5","hrthth",1000000,64,'sha512',() => {
    console.log('Thread 5 ended: ',Date.now()-startDate,'seconds');
});
crypto.pbkdf2("12hrthrt5","hrthth",1000000,64,'sha512',() => {
    console.log('Thread 6 ended: ',Date.now()-startDate,'seconds');
});

crypto.pbkdf2("12hrthrt5","hrthth",1000000,64,'sha512',() => {
    console.log('Thread 7 ended: ',Date.now()-startDate,'seconds');
});

crypto.pbkdf2("12hrthrt5","hrthth",1000000,64,'sha512',() => {
    console.log('Thread 8 ended: ',Date.now()-startDate,'seconds');
});

crypto.pbkdf2("12hrthrt5","hrthth",1000000,64,'sha512',() => {
    console.log('Thread 9 ended: ',Date.now()-startDate,'seconds');
});
