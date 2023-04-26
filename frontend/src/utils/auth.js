const isValidEmail = (email) => {
  // Check if email is in a valid format
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export { isValidEmail };
