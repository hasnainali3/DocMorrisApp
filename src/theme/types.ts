export interface Theme {
  name: string;
  colors: {
    primary: string;
    background: string;
    accent: string;
    text: string;
  };
  spacing: {
    s: number;
    m: number;
    l: number;
  };
}

export type Color = keyof Theme['colors'];
