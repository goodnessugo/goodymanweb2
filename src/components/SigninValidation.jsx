import React from 'react'

const SigninValidation = (values) => {
  let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA=Z0-9]{8,}$/



// email error check
    if(values.email === "") {
  error.email = "Email should not be empty"
}
else if(!email_pattern.test(values.email)){
  error.email = "Email Didn't match"
}else {
  error.email = ""
}



// password eror check
    if(values.password === "") {
  error.password = "password should not be empty"
}
else {
  error.password = ""
}
//     if(values.password === "") {
//   error.password = "password should not be empty"
// }
// else if(!password_pattern.test(values.password)){
//   error.password = "password Didn't match"
// }else {
//   error.password = ""
// }





  return error;
}

export default SigninValidation