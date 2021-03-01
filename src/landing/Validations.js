export const isUsernameValid = (username) => {
  if (username.length === 0) {
    return false;
  }
  return true;
};

export const isPasswordValid = (password) => {
  if (password.length < 6) {
    return false;
  }
  return true;
};

export const isFirstNameValid = (firstName) => {
  if (firstName.length > 0
      && firstName.charAt(0) === firstName.charAt(0).toUpperCase()) {
    return true;
  }
  return false;
};

export const isLastNameValid = (lastName) => {
  if (lastName.length > 0
      && lastName.charAt(0) === lastName.charAt(0).toUpperCase()) {
    return true;
  }
  return false;
};

export const isConfirmPasswordValid = (password, confirmPassword) => {
  if (password === confirmPassword
      && isPasswordValid(password)) {
    return true;
  }
  return false;
};
