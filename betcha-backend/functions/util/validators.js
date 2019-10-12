const isEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(regEx)) return true;
    else return false;
}

const isEmpty = (string) => {
    if(string.trim() === '') return true;
    else return false;
}

exports.validateSignupData = (data) => {
    let errors = {};

if(isEmpty(data.email)) {
    errors.email = 'Email must not be empty';
} else if(!isEmail(data.email)){
    errors.email = 'Enter a valid email address';
}
if(isEmpty(data.password)) errors.password = 'Please enter your Password';
if(data.password !== data.confirmPassword) errors.confirmPassword = 'Password does not match, Please make sure enter exact same password again';
if(isEmpty(data.userName)) errors.userName = 'Please enter your username';

return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
}
}

exports.validateLoginData = (data) => {
    let errors = {};

    if(isEmpty(data.email)) errors.email = 'Enter a Valid email';
    if(isEmpty(data.password)) errors.password = 'Enter a valid password';

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}

exports.reduceUserDetails = (data) => {
    let userDetails = {};
    if(!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
    if(!isEmpty(data.website.trim())) {
        if(data.website.trim().substring(0, 4) !== 'http') {
            userDetails.website = `http://${data.website.trim()}`;
        } else userDetails.website = data.website;
    }
    if(!isEmpty(data.location.trim())) userDetails.location = data.location;
    return userDetails;
}