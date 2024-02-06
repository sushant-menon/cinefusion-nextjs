export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = name ? /^[A-Za-z\s]+$/.test(name) : true;

  if (!isEmailValid && !isPasswordValid && !isNameValid) {
    return "Name, Email, and Password are not valid";
  } else if (!isEmailValid && !isPasswordValid) {
    return "Email and Password are not valid";
  } else if (!isEmailValid && !isNameValid) {
    return "Name and Email are not valid";
  } else if (!isNameValid) {
    return "Name is not valid";
  } else if (!isEmailValid) {
    return "Email is not valid";
  } else if (!isPasswordValid) {
    return "Password is not valid. It should contain a capital letter, number, and a special character.";
  } else return null;
};
