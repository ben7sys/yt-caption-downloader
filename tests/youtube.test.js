const youtubeApi = require('../../src/api/youtube');
const axios = require('axios');

// Mock axios, um Netzwerkanfragen zu simulieren
jest.mock('axios');

describe('YouTube API', () => {
  describe('getCaptions', () => {
    it('should fetch captions correctly', async () => {
      const mockCaptions = {
        items: [
          { id: '1', snippet: { language: 'en', name: 'English' } },
          { id: '2', snippet: { language: 'de', name: 'Deutsch' } }
        ]
      };
      axios.get.mockResolvedValue({ data: mockCaptions });

      const videoId = 'someVideoId';
      const captions = await youtubeApi.getCaptions(videoId);

      expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('captions'), expect.objectContaining({
        params: {
          part: 'snippet',
          videoId,
          key: expect.any(String)
        }
      }));
      expect(captions).toEqual(mockCaptions.items);
    });

    it('should handle errors', async () => {
      axios.get.mockRejectedValue(new Error('Network error'));

      const videoId = 'someVideoId';
      const captions = await youtubeApi.getCaptions(videoId);

      expect(captions).toBeNull();
    });
  });

  describe('downloadCaption', () => {
    it('should download a caption correctly', async () => {
      const mockCaptionData = 'Subtitle data as string or blob';
      axios.get.mockResolvedValue({ data: mockCaptionData });

      const captionId = 'captionId1';
      const data = await youtubeApi.downloadCaption(captionId);

      expect(axios.get).toHaveBeenCalledWith(expect.stringContaining(`captions/${captionId}`), expect.objectContaining({
        params: {
          tfmt: 'srt',
          key: expect.any(String)
        },
        responseType: 'blob'
      }));
      expect(data).toBe(mockCaptionData);
    });

    it('should handle errors', async () => {
      axios.get.mockRejectedValue(new Error('Network error'));

      const captionId = 'captionId1';
      const data = await youtubeApi.downloadCaption(captionId);

      expect(data).toBeNull();
    });
  });
});
