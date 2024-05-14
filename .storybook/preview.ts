import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { withConsole } from '@storybook/addon-console';
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
    }),
    //withThemeByDataAttribute<ReactRenderer>({
    //  themes: { light: 'light', dark: 'dark' },
    //  defaultTheme: 'light',
    //})
    (storyFn, context) => withConsole()(storyFn)(context),
  ]
};

export default preview;
