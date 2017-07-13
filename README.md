# anc-news-api

## Install
```Shell
npm install nbcnews/anc-news-api#v1.0.2
```

## Usage
### ES6
```JavaScript
import AppleNewsAPI from 'anc-news-api';
const API = AppleNewsAPI(channelID, APIKey, APISecret);
```

### CommonJS
```JavaScript
var AppleNewsAPI = require('anc-news-api');
var API = AppleNewsAPI(channelID, APIKey, APISecret);
```

## API
* *constructor*(channelID, APIKey, APISecret)
  * `channelID` (string)
  * `APIKey` (string)
  * `APISecret` (string)
* [**createArticle**](https://developer.apple.com/library/content/documentation/General/Conceptual/News_API_Ref/CreateArticle.html#//apple_ref/doc/uid/TP40015409-CH14-SW1)(article[, options = {}, optionsKey = 'ancOptions'])
  * `article` (object)
  * `options` (object, default: `{}`)
  * `optionsKey` (string, default: `'ancOptions'`)
* [**deleteArticle**](https://developer.apple.com/library/content/documentation/General/Conceptual/News_API_Ref/DeleteArticle.html#//apple_ref/doc/uid/TP40015409-CH16-SW1)(articleID)
  * `articleID` (string)
* [**listSections**](https://developer.apple.com/library/content/documentation/General/Conceptual/News_API_Ref/ListSections.html#//apple_ref/doc/uid/TP40015409-CH11-SW1)()
* [**readArticle**](https://developer.apple.com/library/content/documentation/General/Conceptual/News_API_Ref/ReadArticle.html#//apple_ref/doc/uid/TP40015409-CH13-SW1)(articleID)
  * `articleID` (string)
* [**readChannel**](https://developer.apple.com/library/content/documentation/General/Conceptual/News_API_Ref/ReadChannel.html#//apple_ref/doc/uid/TP40015409-CH9-SW1)()
* [**readSection**](https://developer.apple.com/library/content/documentation/General/Conceptual/News_API_Ref/ReadSection.html#//apple_ref/doc/uid/TP40015409-CH12-SW1)(sectionID)
  * `sectionID` (string)
* [**searchChannel**](https://developer.apple.com/library/content/documentation/General/Conceptual/News_API_Ref/SearchArticles.html#//apple_ref/doc/uid/TP40015409-CH17-SW1)(searchQuery)
  * `searchQuery` (object, default: `{}`)
* [**searchSection**](https://developer.apple.com/library/content/documentation/General/Conceptual/News_API_Ref/SearchArticles.html#//apple_ref/doc/uid/TP40015409-CH17-SW1)(sectionID, searchQuery)
  * `sectionID` (string)
  * `searchQuery` (object, default: `{}`)
* [**updateArticle**](https://developer.apple.com/library/content/documentation/General/Conceptual/News_API_Ref/UpdateArticle.html#//apple_ref/doc/uid/TP40015409-CH15-SW1)(articleID, revision[, article = {}, options = {}, optionsKey = 'ancOptions'])
  * `articleID` (string)
  * `revision` (string)
  * `article` (object, default: `{}`)
  * `options` (object, default: `{}`)
  * `optionsKey` (string, default: `'ancOptions'`)
