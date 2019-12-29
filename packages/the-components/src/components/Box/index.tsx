import {
  border,
  boxShadow,
  color,
  compose,
  position,
  styled,
  typography,
} from '@app/theme';
import { Flex, IFlexProps } from '../Flex';

export interface IBoxProps extends IFlexProps {}

/**
 * @render react
 * @name Box component
 * @description Box component.
 * @example
 * <Box>
 *   <Flex />
 *   <Flex />
 * </Box>
 */

export const BoxStyles = compose(
  border,
  boxShadow,
  color,
  position,
  typography,
);

export const Box = styled(Flex)<IBoxProps>`
  box-sizing: border-box;
  flex-direction: column;

  ${BoxStyles};
`;

Box.defaultProps = {
  width: '100%',
};
