import { ERRORS as ERROR } from "./constants/errors";

export default function validateSignUp(values) {
  let errors = {};
  const re_username = /^[A-Za-z0-9]{3,16}$/i;
  const re_email =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;
  const re_password = /(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,18}$/i;
  const re_UID = /^[0-9]{9}$/i;

  if (!values.name) errors.name = ERROR.NAME_REQ;

  if (!values.username.trim()) errors.username = ERROR.USERNAME_REQ;
  else if (!re_username.test(values.username))
    errors.username = ERROR.USERNAME_INVALID;

  if (!values.email) errors.email = ERROR.EMAIL_REQ;
  else if (!re_email.test(values.email)) errors.email = ERROR.EMAIL_INVALID;

  if (!values.password) errors.password = ERROR.PASSWORD_REQ;
  else if (!re_password.test(values.password))
    errors.password = ERROR.PASSWORD_INVALID;

  if (!values.confpassword) errors.confpassword = ERROR.PASSWORD_REQ;
  else if (values.confpassword !== values.password)
    errors.confpassword = ERROR.PASSWORD_NOTMATCH;

  if (!values.UID) errors.UID = ERROR.UID_REQ;
  else if (!re_UID.test(values.UID)) errors.UID = ERROR.UID_INVALID;

  return errors;
}
