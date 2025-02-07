import React from 'react'

const RegisterValidation = (values) => {
  
    let error = {}
      const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA=Z0-9]{8,}$/
  
  
  
  // first name error check
      if(values.firstname === "") {
    error.firstname = "First name should not be empty"
  }
  else {
    error.firstname = ""
  }
  
  // lastname error check
      if(values.lastname === "") {
    error.lastname = "last name should not be empty"
  }
  else {
    error.lastname = ""
  }
  
  
  // dateofbirth error check
      if(values.dateofbirth === "") {
    error.dateofbirth = "Date of birth should not be empty"
  }
  else {
    error.dateofbirth = ""
  }
  
  
  
  // email error check
      if(values.email === "") {
    error.email = "Email should not be empty"
  }
  else if(!email_pattern.test(values.email)){
    error.email = "Email Didn't match"
  }else {
    error.email = ""
  }
  
  
  
  // password error check
      if(values.password === "") {
    error.password = "password should not be empty"
  }
  else {
    error.password = ""
  }
  
  // confirmpassword error check
      if(values.confirmpassword === "") {
    error.confirmpassword = "Con.password should not be empty"
  }
  else {
    error.confirmpassword = ""
  }
  // password eror check
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

export default RegisterValidation