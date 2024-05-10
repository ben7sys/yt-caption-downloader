require('dotenv').config();
import { get } from 'axios';

const API_KEY = process.env.YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

const youtubeApi = {
  // Funktion zum Abrufen verfügbarer Untertitel für ein Video
  getCaptions: async (videoId) => {
    try {
      const response = await get(`${BASE_URL}/captions`, {
        params: {
          part: 'snippet',
          videoId: videoId,
          key: API_KEY
        }
      });
      return response.data.items;
    } catch (error) {
      console.error('Error fetching captions:', error);
      return null;
    }
  },

  // Funktion zum Herunterladen eines spezifischen Untertitels
  downloadCaption: async (captionId, format = 'srt') => {
    try {
      const response = await get(`${BASE_URL}/captions/${captionId}`, {
        params: {
          tfmt: format,
          key: API_KEY
        },
        responseType: 'blob'  // Wichtig für das Herunterladen von Dateiinhalten
      });
      return response.data;  // Dies ist ein Blob-Objekt
    } catch (error) {
      console.error('Error downloading caption:', error);
      return null;
    }
  }
};

export default youtubeApi;
