//let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
//let regexComments = /^.{1,255}$/;

const validation = (form) => {
  let errors = {};
  if (!regexEmail.test(form.username)) {
    errors.username = "Invalid Email";
  }
  if (!form.username) {
    errors.username = "Empty field";
  }
  if (form.username.length > 35) {
    errors.username = "field greater than 35";
  }
  if (!form.password.match(/\d/)) {
    errors.password = "password must have a number";
  }
  if (form.password.length < 6 || form.password.length > 10) {
    errors.password = "password to have 6 to 10 characters";
  }
  return errors;
};

export default validation;
