import {textVariants} from '../theme/themes';
import {Color} from '../theme/types';
import styled from 'styled-components/native';

export type Variants = keyof typeof textVariants;

interface TypographyProperties {
  variant?: Variants;
  color?: Color;
}

export const Typography = styled.Text<TypographyProperties>(
  ({variant, theme, color}) => {
    const textStyles = {...textVariants[variant ?? 'body.b1']};

    return {
      ...textStyles,
      color: theme.colors[color ?? 'text'],
    };
  },
);
