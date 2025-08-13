const request = require('supertest');
const app = require('../index');

describe('Route Pattern Tests', () => {
  describe('Supported URL Schemes', () => {
    test('should support /:owner/:repo/README.md', async () => {
      const response = await request(app)
        .get('/facebook/react/README.md')
        .expect(200)
        .expect('Content-Type', /text\/markdown/);
      
      expect(response.text).toContain('🌸');
    });

    test('should NOT support github.com prefix in route path', async () => {
      const response = await request(app)
        .get('/github.com/facebook/react/README.md')
        .expect(404); // This should be a 404 as it's not a valid route pattern
    });

    test('should NOT support /:owner/:repo without README.md', async () => {
      const response = await request(app)
        .get('/facebook/react')
        .expect(404); // No route handler for this pattern
    });

    test('should support API endpoint with various URL formats', async () => {
      const testUrls = [
        'https://github.com/facebook/react',
        'https://github.com/facebook/react/',
        'https://github.com/facebook/react/README.md',
        'https://github.com/facebook/react/blob/main/README.md',
        'https://github.com/facebook/react/blob/master/README.md',
        'https://www.github.com/facebook/react'
      ];

      for (const url of testUrls) {
        const response = await request(app)
          .get(`/api/lint?repo_url=${encodeURIComponent(url)}`)
          .expect(200);
        
        expect(response.body).toHaveProperty('repo', 'facebook/react');
        expect(response.body.linted_url).toMatch(/facebook\/react\/README\.md$/);
      }
    });
  });

  describe('Route Priority and Conflicts', () => {
    test('should handle health check endpoint', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200)
        .expect('Content-Type', /application\/json/);
      
      expect(response.body).toHaveProperty('status', 'OK');
      expect(response.body).toHaveProperty('service', 'readme-lint-service');
    });

    test('should handle /api/* routes before /:owner/:repo pattern', async () => {
      const response = await request(app)
        .get('/api/lint?repo_url=https://github.com/test/repo')
        .expect(200)
        .expect('Content-Type', /application\/json/);
      
      expect(response.body).toHaveProperty('linted_url');
    });

    test('should reject malformed owner/repo patterns', async () => {
      // Test with invalid characters or patterns
      const invalidPaths = [
        '/owner/',           // Missing repo
        '//repo',           // Missing owner
        '/owner//README.md', // Double slash
        '/',                // Root path
        '/owner/repo/extra/README.md' // Too many path segments
      ];

      for (const path of invalidPaths) {
        const response = await request(app)
          .get(path)
          .expect(404); // Should all be 404 since they don't match our pattern
      }
    });
  });

  describe('Content Type Handling', () => {
    test('should return markdown content-type for README routes', async () => {
      const response = await request(app)
        .get('/nodejs/node/README.md')
        .expect(200)
        .expect('Content-Type', /text\/markdown/);
    });

    test('should return JSON content-type for API routes', async () => {
      const response = await request(app)
        .get('/api/lint?repo_url=https://github.com/nodejs/node')
        .expect(200)
        .expect('Content-Type', /application\/json/);
    });

    test('should return JSON for error responses', async () => {
      const response = await request(app)
        .get('/api/lint?repo_url=invalid-url')
        .expect(400)
        .expect('Content-Type', /application\/json/);
      
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('URL Edge Cases', () => {
    test('should handle encoded URLs in API requests', async () => {
      const encodedUrl = encodeURIComponent('https://github.com/facebook/react');
      const response = await request(app)
        .get(`/api/lint?repo_url=${encodedUrl}`)
        .expect(200);
      
      expect(response.body).toHaveProperty('repo', 'facebook/react');
    });

    test('should handle URLs with query parameters', async () => {
      const response = await request(app)
        .get('/api/lint?repo_url=https://github.com/facebook/react?tab=readme')
        .expect(200);
      
      expect(response.body).toHaveProperty('repo', 'facebook/react');
    });

    test('should handle URLs with anchors', async () => {
      const response = await request(app)
        .get('/api/lint?repo_url=https://github.com/facebook/react#readme')
        .expect(200);
      
      expect(response.body).toHaveProperty('repo', 'facebook/react');
    });
  });
});