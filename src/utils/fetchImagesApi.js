import axios from 'axios';
import { PIXABAY_API_URL, IMAGE_PER_PAGE } from './constants';

axios.defaults.baseURL = PIXABAY_API_URL;

export async function fetchImages(keyword, page) {
  const queryParams = `?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${keyword}&per_page=${IMAGE_PER_PAGE}&page=${page}&image_type=photo&orientation=horizontal&safesearch=true`;

  const response = await axios(queryParams);

  if (!response.data.totalHits) {
    throw new Error('Sorry, we couldn’t find any image for your search(');
  }

  return response.data;
}
