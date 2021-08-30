import _get from 'lodash.get';

const _getArray = (data, key) =>
  Array.isArray(_get(data, key)) ? _get(data, key) : [];

export default _getArray;
