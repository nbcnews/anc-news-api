# anc-news-api

## Install
```Shell
npm install nbcnews/anc-news-api#v1.0.1
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
* **createArticle**(article[, options = {}, optionsKey = 'ancOptions'])
  * `article` (object)
  * `options` (object, default: `{}`)
  * `optionsKey` (string, default: `'ancOptions'`)
* **deleteArticle**(articleID)
  * `articleID` (string)
* **listSections**()
* **readArticle**(articleID)
  * `articleID` (string)
* **readChannel**()
* **readSection**(sectionID)
  * `readSection` (string)
* **searchChannel**(searchQuery)
  * `searchQuery` (string)
* **searchSection**(sectionID, searchQuery)
  * `sectionID` (string)
  * `searchQuery` (string)
* **updateArticle**(articleID, revision[, article = {}, options = {}, optionsKey = 'ancOptions'])
  * `articleID` (string)
  * `revision` (string)
  * `article` (object, default: `{}`)
  * `options` (object, default: `{}`)
  * `optionsKey` (string, default: `'ancOptions'`)
