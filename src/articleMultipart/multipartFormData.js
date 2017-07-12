/*
 * implements
 *   https://developer.apple.com/library/content/documentation/General/Conceptual/News_API_Ref/CreateArticle.html
 * inspired by
 *   - https://github.com/micnews/apple-news/blob/master/lib/encode-form-data.js
 *   - https://github.com/nbcnews/pps/blob/master/lib/pushers/applenews/lib/encode-form-data.js
 */

import FormData from 'form-data';
import { isEmpty } from 'ramda';

const multipartFormData = ({ article, metadata }) => new Promise((resolve) => {
  const form = new FormData();
  let body = '';

  if (!isEmpty(article)) {
    form.append(
      'article.json',
      JSON.stringify(article),
      {
        contentType: 'application/json',
        filename: 'article.json',
      },
    );
  }

  if (!isEmpty(metadata)) {
    form.append(
      'metadata',
      JSON.stringify({ data: metadata }),
      { contentType: 'application/json' },
    );
  }

  form.on('data', (chunk) => {
    body += chunk;
  }).on('end', () => {
    resolve({
      body,
      headers: form.getHeaders(),
    });
  }).resume();
});

export default multipartFormData;
