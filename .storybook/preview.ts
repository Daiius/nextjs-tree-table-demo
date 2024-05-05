import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import './style.css';
//import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: { light: '', dark: 'dark'},
      defaultTheme: 'light',
    })
    //withThemeByDataAttribute<ReactRenderer>({
    //  themes: { light: 'light', dark: 'dark' },
    //  defaultTheme: 'light',
    //})
  ]
};

export default preview;
