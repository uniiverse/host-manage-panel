import { createSelector } from 'reselect';

import { getUser } from '../raw-selectors';

export const getUser = createSelector(
  [getSession], (session) => session.user || null
);
