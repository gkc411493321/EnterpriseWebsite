module.exports = {
	productionSourceMap: false,
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views',
			}
		}
	},
	publicPath: process.env.NODE_ENV === "production" ? "/vue/" : "/",
	devServer: {
		host: "47.102.101.45",
		port: 80,
		https: false,
		open: true,
		proxy: {
			
		},
	}
	
}