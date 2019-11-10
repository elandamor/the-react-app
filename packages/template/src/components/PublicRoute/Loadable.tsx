/**
 *
 * Asynchronously loads the component for PublicRoute
 *
 */

import Loadable from '@app/utils/loadable';

export default Loadable(() => import('./index'));