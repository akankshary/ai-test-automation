const { test, expect } = require('@playwright/test');
const axios = require('axios');

test('GET posts API returns 200 and valid data', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.length).toBeGreaterThan(0);

  const firstPost = response.data[0];
  expect(firstPost).toHaveProperty('id');
  expect(firstPost).toHaveProperty('title');
  expect(firstPost).toHaveProperty('body');
});