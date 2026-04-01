const { generateTestIdeas } = require('./aiTestGenerator');

const ideas = generateTestIdeas(
  'Login functionality with valid login, invalid login, locked out user, and empty fields'
);

console.log('\nAI Generated Test Ideas:\n');
console.log(ideas);