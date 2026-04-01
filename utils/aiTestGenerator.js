function generateTestIdeas(featureDescription) {
  return `
AI Generated Test Ideas:

1. Verify successful login with valid credentials
2. Verify error message with invalid password
3. Verify locked-out user cannot log in
4. Verify login fails when fields are empty
5. Verify SQL injection or invalid input handling
`;
}

module.exports = { generateTestIdeas };