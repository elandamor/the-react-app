import {
  shouldForwardProp,
  space,
  styled,
  StyledSystemProps,
  typography,
} from '@paisidevs/tra-theme';

/**
 * @render react
 * @name H5 component
 * @description Heading level 5.
 * @example
 *  <H5>Heading</H5>
 */

const H5 = styled('h5', { shouldForwardProp })<StyledSystemProps>`
  ${space};
  ${typography};
`;

H5.defaultProps = {
  color: 'text.default',
  fontSize: [4, 5],
};

export default H5;