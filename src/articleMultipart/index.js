import {
  mergeDeepRight,
  omit,
  pipe,
  pipeP,
  propOr,
} from 'ramda';
import multipartFormData from './multipartFormData';

const articleMultipart = multipartHandler => pipeP(
  pipe(
    // This is the module's implicit/point-free method signature (in docs for R.pipe, R.pipeP)
    (article, options = {}, optionsKey = 'ancOptions') => ({
      article: omit([optionsKey], article),
      metadata: mergeDeepRight(
        propOr({}, optionsKey, article),
        options,
      ),
    }),
    multipartFormData,
  ),
  multipartHandler,
);

export default articleMultipart;
