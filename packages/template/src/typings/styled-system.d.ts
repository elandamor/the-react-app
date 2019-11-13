import 'styled-system';

declare module 'styled-system' {
  export interface StyledSystemProps
    extends AlignItemsProps,
      BorderProps,
      BordersProps,
      BorderRadiusProps,
      BoxShadowProps,
      ColorProps,
      DisplayProps,
      FlexDirectionProps,
      FlexProps,
      FontFamilyProps,
      FontSizeProps,
      FontWeightProps,
      FlexWrapProps,
      HeightProps,
      JustifyContentProps,
      MaxHeightProps,
      MaxWidthProps,
      MinHeightProps,
      MinWidthProps,
      OverflowProps,
      PositionProps,
      SizeProps,
      SpaceProps,
      TextAlignProps,
      WidthProps,
      ZIndexProps {
    color?: string | (string & string[]);
  }
}
