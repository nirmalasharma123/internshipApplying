const isValidateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    return re.test(email)
    
};

const isValidateFullame = function(fullName){
    const regex = /^([a-z  A-Z ]){2,50}$/
    return regex.test(fullName)
} ;
const isvalidName=function(name){
    const regex=/^([a-z  A-Z ]){2,10}$/
    return regex.test(name)
};
 const isvalidLink=function(logoLink){
     const regex= /^https?:\/\/.*\.[s3].*\.(png|gif|webp|jpeg|jpg)\??.*$/
         return regex.test(logoLink)
 };
const isValidPhone = function(mobile){
    const regex = /^[1-9]\d*$/
    return regex.test(mobile)
};




module.exports.isValidateEmail = isValidateEmail;
module.exports.isValidateFullame =isValidateFullame;
module.exports.isvalidName=isvalidName;
module.exports.isvalidLink=isvalidLink;
module.exports.isValidPhone=isValidPhone;
