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
* **createArticle**(article[, options = {}, optionsKey = 'ancOptions'])
* **deleteArticle**(articleID)
* **listSections**()
* **readArticle**(articleID)
* **readChannel**()
* **readSection**(sectionID)
* **searchChannel**(searchQuery)
* **searchSection**(sectionID, searchQuery)
* **updateArticle**(articleID, revision[, article = {}, options = {}, optionsKey = 'ancOptions'])
