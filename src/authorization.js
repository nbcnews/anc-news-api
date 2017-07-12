/* implements
 *   https://developer.apple.com/library/content/documentation/General/Conceptual/News_API_Ref/Security.html
 */

import { createHmac } from 'crypto';
import moment from 'moment';
import { map, pipe } from 'ramda';

const mergeStringsToCanonicalBuffer = pipe(
  map(Buffer.from),
  Buffer.concat,
);

const hmacKey = APISecret => Buffer.from(APISecret, 'base64');

export default function authorization({
  APIKey,
  APISecret,
  contentType,
  data,
  method,
  URL,
}) {
  const now = moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');
  const signature = createHmac('sha256', hmacKey(APISecret))
    .update(mergeStringsToCanonicalBuffer([
      method,
      URL,
      now,
      contentType,
      data,
    ])).digest('base64');
  return `HHMAC; key="${APIKey}"; signature="${signature}"; date="${now}"`;
}
