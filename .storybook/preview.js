import '../src/styles/tailwind.css'
import '../src/styles/_global.sass'
import '../src/styles/_theme.sass'
import 'antd/dist/antd'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
