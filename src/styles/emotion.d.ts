import "@emotion/react";
import { theme } from "./theme";

type ExtendedTheme = typeof theme;

// emotion.d.ts
declare module "@emotion/react" {
  export const css: Function;
}
