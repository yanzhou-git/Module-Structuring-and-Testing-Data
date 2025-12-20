/*function passwordValidator(password) {
    return password.length >= 5;
}
*/ 

 function passwordValidator(password) {
    const length = password.length >= 5;
    const upperCase = /[A-Z]/.test(password) ;
    const lowerCase = /[a-z]/.test(password);
    const number = /[0-9]/.test(password);
    const symbol = /[!#$%.*&]/.test(password);
    let previousArray = [];
    function addPassword (password) {
        previousArray.push(password);
    }
    const unique = !previousArray.includes(password);
    return length && upperCase && lowerCase && number && symbol && unique ; 
}

module.exports = passwordValidator;