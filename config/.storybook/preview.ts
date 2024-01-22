import type { Preview } from "@storybook/react"
import {Theme} from '../../src/app/providers/ThemeContextProvider/types/type'
import { styleDecorator } from '../../src/shared/config/storybook/styleDecorator';
import { themeDecorator } from '../../src/shared/config/storybook/themeDecorator';
import { routerDecorator } from '../../src/shared/config/storybook/routerDecorator';

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [styleDecorator,themeDecorator(Theme.LIGHT),routerDecorator]



