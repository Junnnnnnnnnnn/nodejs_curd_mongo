var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/local');

var db = mongoose.connection;

db.on("error", () => {
    console.log("Connect Error");
});

db.on("open", () => {
    console.log("Connect !!!");
});

var member = mongoose.Schema({
    email: "string",
    name: "string",
    phone: "string",
},{
    versionKey: false,
});

member.set("collection","member");

var Member = mongoose.model("member",member);
// var newMember = Member({
//     email: "zktldhpx130@gmail.com",
//     name: "카시오",
//     phone: "010-4561-9687"
// });

// newMember.save((err, result) => {
//     if(err){
//         console.log("SAVE ERROR");
//     }else{
//         console.log(result);
//     }
// });

function memberFind(){
    return new Promise((resolve, reject) => {
        Member.find((err, data) => {
            if(err){
                reject("MEMBER ERROR");
            }else{
                resolve(data);
            }
        });
    });
};

memberFind().then((result) => {
    console.log(result);
});


