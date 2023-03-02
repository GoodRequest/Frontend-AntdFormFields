/*eslint-disable*/

const { override, fixBabelImports, addWebpackPlugin, addWebpackExternals } = require('customize-cra');
const AntdDayjsWebpackPlugin  = require('antd-dayjs-webpack-plugin')

module.exports = override(
    // rewireReactHotLoader,
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    // antd components dayjs
    addWebpackPlugin(new AntdDayjsWebpackPlugin()),
    // addWebpackExternals({
	// 	react: "React",
	// 	"react-dom": "ReactDom"
	// })
)