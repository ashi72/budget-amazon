export default function validateSignUp(values) {
  let errors = {};
  if (!values.Name) {
    errors.Name = "Name required";
  }
  if (!values.Username.trim()) {
    errors.Username = "Username required";
  } else if (!/^[A-Za-z0-9]{3,16}$/i.test(values.Username)) {
    errors.Username =
      "Username must be between 3-16 characters long and cannot contain special characters";
  }
  if (!values.Email) {
    errors.Email = "E-mail required";
  } else if (
    !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
      values.Email
    )
  ) {
    errors.Email = "E-mail address is invalid";
  }

  if (!values.Password) {
    errors.Password = "Password required";
  } else if (
    !/(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,18}$/i.test(
      values.Password
    )
  ) {
    errors.Password =
      "Password must be 6-18 characters long with at least 1 letter and 1 number";
  }
  if (!values.ConfPassword) {
    errors.ConfPassword = "Password requried";
  } else if (values.ConfPassword !== values.Password) {
    errors.ConfPassword = "Passwords are not the same";
  }
  if (!values.UID) {
    errors.UID = "UID Required";
  } else if (!/^[0-9]{9}$/i.test(values.UID)) {
    errors.UID = "UID must be 9 characters long";
  }
  return errors;
}
