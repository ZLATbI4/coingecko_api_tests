# CoinGecko API autotests
<hr>

[API doc](https://www.coingecko.com/en/api/documentation)

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

