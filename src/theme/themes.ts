import {Theme} from './types';

export const common = {
  spacing: {
    s: 8,
    m: 16,
    l: 24,
  },
};

export const textVariants = {
  'button.medium': {
    fontSize: 14,
    lineHeight: 22,
  },
  'body.b1': {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  'body.b2': {
    fontSize: 14,
    lineHeight: 22,
  },
} as const;

export const docMorrisTheme: Theme = {
  ...common,
  name: 'docmorris',
  colors: {
    primary: '#00695c',
    background: '#f5f5f5',
    accent: '#fbc02d',
    text: '#333',
  },
};

export const euraponTheme: Theme = {
  ...common,
  name: 'eurapon',
  colors: {
    primary: '#0071ce',
    background: '#f5f5f5',
    accent: '#00D264',
    text: '#222',
  },
};
