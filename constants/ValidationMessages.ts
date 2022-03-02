const Validation = {
  required: 'Required',
  invalidEmail: 'Invalid email',
  noPassword: 'No password provided',
  toShortPassword: 'Password is too short - should be 8 chars minimum.',
  passwordHasNumber: 'Password must contain a number.',
  hasnumber: /(?=.*[0-9])/,
}

export default Validation
