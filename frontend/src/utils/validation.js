export const validateStep1 = (data) => {
  const errors = {};
  if (!data.fullName) errors.fullName = "Full name is required.";
  if (!data.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid.";
  }
  return errors;
};

export const validateStep2 = (data) => {
  const errors = {};
  if (!data.password || data.password.length < 6)
    errors.password = "Password must be at least 6 characters.";
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = "Passwords do not match.";
  return errors;
};
