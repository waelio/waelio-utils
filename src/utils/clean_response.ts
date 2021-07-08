import { _get } from './_get';
export const _cleanResponse = (response) => _get(response) || response;
