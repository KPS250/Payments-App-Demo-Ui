const isValidPhone = phoneNo => {
  const phoneRegex = /^\d{10}$/;
  return phoneNo.trim() !== '' && phoneRegex.test(phoneNo);
};

const isValidEmail = email => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return emailRegex.test(email) && email.trim().length > 3;
};

const isValidPassword = password => {
  return password.trim().length >= 6;
};

const isValidName = name => {
  const nameRegex = /^[a-zA-Z ]{3,30}$/;
  return nameRegex.test(name);
};

const isValidLogin = (username, password) => {
  return (
    username.trim() !== '' &&
    isValidEmail(username) &&
    password.trim() !== '' &&
    isValidPassword(password)
  );
};

const isValidProfile = (name, email, phoneNo, nickName) => {
  return (
    name.trim() !== '' &&
    isValidName(name) &&
    email.trim() !== '' &&
    isValidName(email) &&
    phoneNo.trim() !== '' &&
    isValidName(phoneNo) &&
    nickName.trim() !== '' &&
    isValidName(nickName)
  );
};

const isEqualPassword = (password, confirmPassword) => {
  return (
    password.trim() !== '' &&
    isValidPassword(password) &&
    confirmPassword.trim() !== '' &&
    isValidPassword(confirmPassword) &&
    password !== confirmPassword
  );
};

const isValidCreatePassword = (password, confirmPassword) => {
  return (
    password.trim() !== '' &&
    isValidPassword(password) &&
    confirmPassword.trim() !== '' &&
    isValidPassword(confirmPassword) &&
    password === confirmPassword
  );
};

const isValidOtp = OTP => {
  //const otpRegex = /^\d{4}$/;
  return OTP.trim() !== '' && OTP.trim().length >= 4;
};

export {
  isValidPhone,
  isValidEmail,
  isValidName,
  isValidProfile,
  isValidPassword,
  isValidLogin,
  isEqualPassword,
  isValidCreatePassword,
  isValidOtp,
};
