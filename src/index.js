/* implements
 *   https://developer.apple.com/library/content/documentation/General/Conceptual/News_API_Ref/
 */

import { create as axiosCreate } from 'axios';
import { stringify as stringifyQuery } from 'querystring';
import { isEmpty, merge, pick } from 'ramda';
import authorization from './authorization';
import articleMultipart from './articleMultipart';

const baseURL = 'https://news-api.apple.com';
const appleNewsBaseRequest = axiosCreate({ baseURL }).request;

const validSearchQuery = (searchQuery) => {
  const validSearchArticleParams = pick([
    'fromDate',
    'pageSize',
    'pageToken',
    'sortDir',
    'toDate',
  ], searchQuery);
  return isEmpty(validSearchArticleParams) ? '' : `?${stringifyQuery(validSearchArticleParams)}`;
};

export default function appleNewsAPI(channelID, APIKey, APISecret) {
  const appleNewsRequest = (path, method = 'GET', headers = {}, data = '') => appleNewsBaseRequest({
    data,
    headers: merge(headers, { Authorization: authorization({
      APIKey,
      APISecret,
      contentType: method === 'POST' ? headers['content-type'] : '',
      data,
      method,
      URL: `${baseURL}/${path}`,
    }) }),
    method,
    url: path,
    validateStatus(status) {
      return method === 'DELETE' ? status === 204 || status === 404 : status >= 200 && status < 300;
    },
  }).then(resp => resp.data);

  return {
    // This method's implicit/point-free signature defined in articleMultipart module
    createArticle: articleMultipart(multipart => appleNewsRequest(
      `channels/${channelID}/articles`,
      'POST',
      multipart.headers,
      multipart.body,
    )),
    deleteArticle: articleID => appleNewsRequest(`articles/${articleID}`, 'DELETE'),
    listSections: () => appleNewsRequest(`channels/${channelID}/sections`),
    readArticle: articleID => appleNewsRequest(`articles/${articleID}`),
    readChannel: () => appleNewsRequest(`channels/${channelID}`),
    readSection: sectionID => appleNewsRequest(`sections/${sectionID}`),
    searchChannel: (searchQuery = {}) => appleNewsRequest(`channels/${channelID}/articles${validSearchQuery(searchQuery)}`),
    searchSection: (sectionID, searchQuery = {}) => appleNewsRequest(`sections/${sectionID}/articles${validSearchQuery(searchQuery)}`),
    updateArticle: (
      articleID,
      revision,
      article = {},
      options = {},
      optionsKey = 'ancOptions',
    ) => articleMultipart(multipart => appleNewsRequest(
      `articles/${articleID}`,
      'POST',
      multipart.headers,
      multipart.body,
    ))(
      article,
      merge(options, { revision }),
      optionsKey,
    ),
  };
}
