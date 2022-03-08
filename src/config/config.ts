export default () => ({
	appPort: parseInt(process.env.APPLICATION_PORT),
	database: {
		host: process.env.DATABASE__HOST,
		port: parseInt(process.env.DATABASE__PORT),
		name: process.env.DATABASE__NAME,
		user: process.env.DATABASE__USER,
		password: process.env.DATABASE__PASSWORD
	},
	nodeEnv: process.env.NODE_ENV
});
