export const validateUsername = (username) => {
  if (username.length === 0) {
    return false;
  }
  return true;
};

export const validatePassword = (password) => {
  if (password.length < 6) {
    return false;
  }
  return true;
};

export const validateFirstName = (firstName) => {
  // eslint-disable-next-line max-len
  if (firstName.length === 0 || firstName.charAt(0) !== firstName.charAt(0).toUpperCase()) {
    return false;
  }
  return true;
};

export const validateLastName = (lastName) => {
  // eslint-disable-next-line max-len
  if (lastName.length === 0 || lastName.charAt(0) !== lastName.charAt(0).toUpperCase()) {
    return false;
  }
  return true;
};

export const checkPasswordMatching = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return false;
  }
  return true;
};
