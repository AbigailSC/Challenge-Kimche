export const validateName = (input) => {
  const regexValidateName = /^[a-zA-Z\s]+$/;
  const errors = {};
  if (input.name.length < 3) {
    errors.name = "debe ser mayor de 2 caracteres"
  } else if (!regexValidateName.test(input.name)) {
    errors.name = "invalido, caracteres rancios"
  }
  return errors;
}