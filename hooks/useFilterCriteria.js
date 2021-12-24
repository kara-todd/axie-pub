import { useReducer } from 'react';

import get from 'lodash.get';
import getArray from 'utis/get-array';

const initialState = {
  region: null,
  parts: null,
  bodyShapes: null,
  classes: null,
  stages: [4],
  numMystic: null,
  pureness: [],
  title: null,
  breedable: null,
  breedCount: [0, 7],
  hp: [],
  skill: [],
  speed: [],
  morale: [],
  purity: [0, 100],
  numJapan: null,
  numXmas: null,
};

const addCriteria = (state, { key, value }) => ({
  ...state,
  [key]: [...getArray(state, key), value],
});

const removeCriteria = (state, { key, value }) => ({
  ...state,
  [key]: getArray(state, key).filter((item) => item !== value),
});

const setCount = (state, { key, value }) => ({
  ...state,
  [key]: !!value || value.includes('any') || !value.length ? null : value,
});

const setRange = (state, { key, value }) => ({
  ...state,
  [key]: value.filter((value) => value !== 'any'),
});

const valueIsArray = ({ value }) => Array.isArray(value);
const keyIsValid = ({ key }) => key in initialState;

// Check all validations evaluate to true.
// If true, call the handler.
// If false, return the original state.
const validate = (checks, handler) => (state, action) => {
  const isValid = checks.reduce(
    (valid, validation) => valid && !!validation(action),
    true
  );
  return isValid ? handler(state, action) : state;
};

const handlers = {
  add: validate([keyIsValid], addCriteria),
  remove: validate([keyIsValid], removeCriteria),
  setRange: validate([keyIsValid, valueIsArray], setRange),
  setCount: validate([keyIsValid], setCount),
};

const reducer = (state, action) =>
  get(handlers, action.type, () => state)(state, action);

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'add':
//       return {
//         ...state,
//         [action.key]: [...getArray(state, action.key), action.value],
//       };
//     case 'remove':
//       return {
//         ...state,
//         [action.key]: getArray(state, action.key).filter(
//           (item) => item !== action.value
//         ),
//       };
//     case 'featureCount':
//       if (!action.name in initialState) {
//         return state;
//       }

//       return {
//         ...state,
//         breedCount: [action.value, _get(state, 'breedCount[1]')],
//       };

//     case 'minBreed':
//       return {
//         ...state,
//         breedCount: [action.value, _get(state, 'breedCount[1]')],
//       };
//     case 'maxBreed':
//       return {
//         ...state,
//         breedCount: [_get(state, 'breedCount[0]', action.value)],
//       };
//     case 'minPurity':
//       return {
//         ...state,
//         purity: [action.value, _get(state, 'purity[1]')],
//       };
//     case 'maxPurity':
//       return {
//         ...state,
//         purity: [_get(state, 'purity[0]', action.value)],
//       };
//     case 'pureness':
//       return {
//         ...state,
//         pureness: [action.value].filter((value) => value !== 'any'),
//       };
//     case 'reinit':
//       return {
//         ...initialState,
//         ...action.state,
//       };

//     default:
//       return state;
//   }
// };

// const objectDiff = (a, b) => {
//   if (_isEqual(a, b)) {
//     return {};
//   }

//   return Object.entries(a).reduce((diff, [key, value]) => {
//     if (_get(b, key, false) && !_isEqual(value, b[key])) {
//       return { ...diff, [key]: b[key] };
//     } else {
//       return diff;
//     }
//   }, {});
// };

// const useQueryString = (state, dispatch) => {
//   const router = useRouter();
//   const alteredState = objectDiff(initialState, state);
//   const qs = _get(router, 'query.criteria', JSON.stringify({}));
//   const stateQS = JSON.stringify(alteredState);
//   const pathname = router.pathname;
//   const replace = router.replace;

//   const pushUrl = useCallback(
//     (query) => {
//       replace({ pathname, query });
//     },
//     [replace, pathname]
//   );

//   useEffect(() => {
//     if (qs !== stateQS) {
//       try {
//         const hasKeys = Object.keys(JSON.parse(stateQS)).length;
//         pushUrl(hasKeys ? { criteria: stateQS } : undefined);
//       } catch (e) {
//         console.error(e);
//       }
//     }
//   }, [stateQS, qs, pushUrl]);
// };

const useFilterCriteria = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // useQueryString(state, dispatch);
  return [state, dispatch];
};

export default useFilterCriteria;
