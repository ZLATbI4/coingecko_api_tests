module.exports = {
    require: [
        'ts-node/register'
    ],
    spec: './test/**/*.test.ts',
    timeout: 60000,
    parallel: true,
    jobs: 4
}