import 'antd/dist/antd.css'
import '../dist/styles/tailwind.css'
import '../dist/styles/_global.sass'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
