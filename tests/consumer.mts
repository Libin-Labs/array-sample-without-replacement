import * as api from '@lp-labs/array-sample-without-replacement';
import { sampleWithoutReplacement } from '@lp-labs/array-sample-without-replacement';
console.log(sampleWithoutReplacement([1, 2, 3, 4], 2));
// @ts-expect-error invalid argument must be rejected by declarations
api.sampleWithoutReplacement('items', 1);
