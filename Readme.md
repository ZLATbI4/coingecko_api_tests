<h1 align="center">CoinGecko API autotests</h1>

[![After push/merge tests run](https://github.com/ZLATbI4/coingecko_api_tests/actions/workflows/after-push-build.yml/badge.svg)](https://github.com/ZLATbI4/coingecko_api_tests/actions/workflows/after-push-build.yml)

[API doc](https://www.coingecko.com/en/api/documentation)
<hr>

### How to run tests?

**By shell:**

```shell
npm test
```

**Generate allure report**

```shell
npm run report
```

**Or run full cycle (test and generate report)**

```shell
npm run full
```

### Run test in docker

```shell
docker build -t geckotests .
docker run geckotests
```

