import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

const objectDiff = (a, b) => {
  if (_isEqual(a, b)) {
    return {};
  }

  return Object.entries(a).reduce((diff, [key, value]) => {
    if (_get(b, key, false) && !_isEqual(value, b[key])) {
      return { ...diff, [key]: b[key] };
    } else {
      return diff;
    }
  }, {});
};

const useQueryString = (state, dispatch) => {
  const router = useRouter();
  const alteredState = objectDiff(initialState, state);
  const qs = _get(router, 'query.criteria', JSON.stringify({}));
  const stateQS = JSON.stringify(alteredState);
  const pathname = router.pathname;
  const replace = router.replace;

  const pushUrl = useCallback(
    (query) => {
      replace({ pathname, query });
    },
    [replace, pathname]
  );

  useEffect(() => {
    if (qs !== stateQS) {
      try {
        const hasKeys = Object.keys(JSON.parse(stateQS)).length;
        pushUrl(hasKeys ? { criteria: stateQS } : undefined);
      } catch (e) {
        console.error(e);
      }
    }
  }, [stateQS, qs, pushUrl]);
};

export default useQueryString;
