import 'antd/dist/antd.css'
import '../src/styles/tailwind.css'
import '../src/styles/_global.sass'
import '../src/styles/_theme.sass'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
