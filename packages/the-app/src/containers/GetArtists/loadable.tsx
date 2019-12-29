import { Box, H3, Loader } from '@app/components';
import React from 'react';
import { Loadable } from '../../utilities';

export default Loadable(() => import('./index'), {
  fallback: (
    <Box>
      <H3>Artists</H3>
      <Box>
        <Loader />
      </Box>
    </Box>
  ),
});
