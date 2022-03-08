export default function validateSignUp(values) {
  let errors = {};
  if (!values.name) {
    errors.name = "Name required";
  }
  if (!values.username.trim()) {
    errors.username = "Username required";
  } else if (!/^[A-Za-z0-9]{3,16}$/i.test(values.username)) {
    errors.username =
      "Username must be between 3-16 characters long and cannot contain special characters";
  }
  if (!values.email) {
    errors.email = "E-mail required";
  } else if (
    !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
      values.email
    )
  ) {
    errors.email = "E-mail address is invalid";
  }

  if (!values.password) {
    errors.password = "Password required";
  } else if (
    !/(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,18}$/i.test(
      values.password
    )
  ) {
    errors.password =
      "Password must be 6-18 characters long with at least 1 letter and 1 number";
  }
  if (!values.confpassword) {
    errors.confpassword = "Password requried";
  } else if (values.confpassword !== values.password) {
    errors.confpassword = "Passwords are not the same";
  }
  if (!values.UID) {
    errors.UID = "UID Required";
  } else if (!/^[0-9]{9}$/i.test(values.UID)) {
    errors.UID = "UID must be 9 characters long";
  }
  return errors;
}
