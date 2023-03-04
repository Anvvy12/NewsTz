export const validateEmail = value => {
  let error = '';
  if (!value) {
    error = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(value)) {
    error = 'Invalid email format';
  }
  return error;
};

export const validatePhone = value => {
  let error = '';
  if (!value) {
    error = 'Phone number is required';
  } else if (!/^[0-9]{10}$/.test(value)) {
    error = 'Invalid phone number format';
  }
  return error;
};
