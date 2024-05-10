const { searchVideos } = require('../src/api/youtube');
// FILEPATH: /home/sieben/github/yt-caption-downloader/tests/youtube.test.js

describe('searchVideos', () => {
    it('should return an array of videos matching the query', async () => {
        const query = 'cats';
        const videos = await searchVideos(query);

        expect(Array.isArray(videos)).toBe(true);
        expect(videos.length).toBeGreaterThan(0);
        expect(videos[0]).toHaveProperty('title');
        expect(videos[0]).toHaveProperty('description');
        expect(videos[0]).toHaveProperty('url');
    });

    it('should return an empty array if no videos are found', async () => {
        const query = 'nonexistentquery';
        const videos = await searchVideos(query);

        expect(Array.isArray(videos)).toBe(true);
        expect(videos.length).toBe(0);
    });
});