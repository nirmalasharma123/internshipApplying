const isValidateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    return re.test(email)
    
};

const isValidateFullame = function(fullName){
    const regex = /^([a-z  A-Z ]){2,30}$/
    return regex.test(fullName)
} ;
const isvalidName=function(name){
    const regex=/^([a-z  A-Z ]){2,10}$/
    return regex.test(name)
};
const isvalidLink=function(logoLink){
    const regex=/(.png|.jpg|.jpeg)$/i
        return regex.test(logoLink)
};
const  isvalidFormat=function(logoLink){
    const regex=/^http/i;
    return regex.test(logoLink)
};




module.exports.isValidateEmail = isValidateEmail;
module.exports.isValidateFullame =isValidateFullame;
module.exports.isvalidName=isvalidName;
module.exports.isvalidLink=isvalidLink;
module.exports.isvalidFormat=isvalidFormat
