module.exports = {
	/**
	 * Application configuration section
	 * http://pm2.keymetrics.io/docs/usage/application-declaration/
	 */
	apps: [
		{
			name: 'partner-api-docs',
			script: 'app.js',
			instance: 1,
			watch: true,
			min_uptime: 5000, // 시작된 것으로 간주되는 앱의 최소 작동 시간
			listen_timeout: 5000, // 앱이 재로드를 강제 실행하기 전의 시간
			max_restarts: 5, // 재시작 시도 수
			restart_delay: 2000, // 재시작 간격
			env: {
				NODE_ENV: 'development',
				PORT: 9000
			},
			env_production: {
				NODE_ENV: 'production',
				PORT: 5000
			}
		},
	],
}
