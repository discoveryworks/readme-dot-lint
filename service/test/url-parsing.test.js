const request = require('supertest');
const app = require('../index');

describe('URL Parsing Tests', () => {

  describe('Direct URL Access - /:owner/:repo/README.md', () => {
    test('should handle basic owner/repo format', async () => {
      const response = await request(app)
        .get('/facebook/react/README.md')
        .expect(200)
        .expect('Content-Type', /text\/markdown/);
      
      expect(response.text).toContain('🌸 Why use react?');
      expect(response.text).toContain('README.lint-conforming');
    });

    test('should handle owner/repo without README.md suffix', async () => {
      const response = await request(app)
        .get('/facebook/react')
        .expect(404); // This should fail as it's not a defined route
    });
  });

  describe('API Endpoint URL Parsing - /api/lint', () => {
    test('should parse basic github.com/owner/repo URL', async () => {
      const response = await request(app)
        .get('/api/lint?repo_url=https://github.com/facebook/react')
        .expect(200)
        .expect('Content-Type', /application\/json/);
      
      expect(response.body).toHaveProperty('linted_url');
      expect(response.body).toHaveProperty('repo', 'facebook/react');
      expect(response.body.linted_url).toMatch(/facebook\/react\/README\.md$/);
    });

    test('should parse github.com/owner/repo/blob/main/README.md URL', async () => {
      const response = await request(app)
        .get('/api/lint?repo_url=https://github.com/golang/go/blob/main/README.md')
        .expect(200)
        .expect('Content-Type', /application\/json/);
      
      expect(response.body).toHaveProperty('repo', 'golang/go');
      expect(response.body.linted_url).toMatch(/golang\/go\/README\.md$/);
    });

    test('should parse github.com/owner/repo/blob/master/README.md URL', async () => {
      const response = await request(app)
        .get('/api/lint?repo_url=https://github.com/microsoft/vscode/blob/master/README.md')
        .expect(200)
        .expect('Content-Type', /application\/json/);
      
      expect(response.body).toHaveProperty('repo', 'microsoft/vscode');
      expect(response.body.linted_url).toMatch(/microsoft\/vscode\/README\.md$/);
    });

    test('should parse github.com/owner/repo/README.md URL', async () => {
      const response = await request(app)
        .get('/api/lint?repo_url=https://github.com/nodejs/node/README.md')
        .expect(200)
        .expect('Content-Type', /application\/json/);
      
      expect(response.body).toHaveProperty('repo', 'nodejs/node');
      expect(response.body.linted_url).toMatch(/nodejs\/node\/README\.md$/);
    });

    test('should handle trailing slashes', async () => {
      const response = await request(app)
        .get('/api/lint?repo_url=https://github.com/facebook/react/')
        .expect(200)
        .expect('Content-Type', /application\/json/);
      
      expect(response.body).toHaveProperty('repo', 'facebook/react');
    });

    test('should reject invalid URL formats', async () => {
      const response = await request(app)
        .get('/api/lint?repo_url=https://gitlab.com/user/repo')
        .expect(400)
        .expect('Content-Type', /application\/json/);
      
      expect(response.body).toHaveProperty('error', 'Invalid GitHub URL format');
    });

    test('should reject missing repo_url parameter', async () => {
      const response = await request(app)
        .get('/api/lint')
        .expect(400)
        .expect('Content-Type', /application\/json/);
      
      expect(response.body).toHaveProperty('error', 'repo_url parameter required');
    });

    test('should handle URLs with www subdomain', async () => {
      const response = await request(app)
        .get('/api/lint?repo_url=https://www.github.com/facebook/react')
        .expect(200); // Actually works because our regex is flexible
        
      expect(response.body).toHaveProperty('repo', 'facebook/react');
    });
  });

  describe('Edge Cases', () => {
    test('should handle repo names with special characters', async () => {
      const response = await request(app)
        .get('/api/lint?repo_url=https://github.com/user/repo-name.js')
        .expect(200);
      
      expect(response.body).toHaveProperty('repo', 'user/repo-name.js');
    });

    test('should handle usernames with special characters', async () => {
      const response = await request(app)
        .get('/api/lint?repo_url=https://github.com/user-name/repo')
        .expect(200);
      
      expect(response.body).toHaveProperty('repo', 'user-name/repo');
    });

    test('should handle very long repo URLs', async () => {
      const longName = 'a'.repeat(100);
      const response = await request(app)
        .get(`/api/lint?repo_url=https://github.com/user/${longName}`)
        .expect(200);
      
      expect(response.body).toHaveProperty('repo', `user/${longName}`);
    });
  });

  describe('Response Format Validation', () => {
    test('should return correct response format for API calls', async () => {
      const response = await request(app)
        .get('/api/lint?repo_url=https://github.com/facebook/react')
        .expect(200);
      
      expect(response.body).toHaveProperty('linted_url');
      expect(response.body).toHaveProperty('repo');
      expect(typeof response.body.linted_url).toBe('string');
      expect(typeof response.body.repo).toBe('string');
      
      // Validate URL format (supertest uses 127.0.0.1, not localhost)
      expect(response.body.linted_url).toMatch(/^http:\/\/(localhost|127\.0\.0\.1):\d+\/[\w-]+\/[\w.-]+\/README\.md$/);
    });

    test('should return markdown content for direct access', async () => {
      const response = await request(app)
        .get('/facebook/react/README.md')
        .expect(200)
        .expect('Content-Type', /text\/markdown/);
      
      expect(response.text).toContain('🌸');
      expect(response.text).toContain('=============================');
      expect(typeof response.text).toBe('string');
      expect(response.text.length).toBeGreaterThan(100);
    });
  });
});