import {CoinsMarkets} from "../src/models/CoinsMarkets";
import {CoinGeckoApi} from "../src/CoinGeckoApi";
import {expect} from "chai";
import {ArraySortingChecks, SortOrder} from "../src/utils/checks/ArraySortingChecks";
import forEach from "mocha-each";

describe("Get coins markets tests", async () => {
    it('Send response only with required query params', async function () {
        const imageUrlRegex: RegExp = new RegExp(/^https:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\?.*$/i);
        const response: CoinsMarkets = await new CoinGeckoApi().coinsMarkets.getCoinsMarkets("usd")
        expect(response.map<string>(coin => coin.name)[0]).to.be.equal("Bitcoin")
        response.forEach(coin => expect(coin.image).match(imageUrlRegex, "Should be image link"))
    });

    forEach(["market_cap_desc", "market_cap_asc"])
        .it(`Check %s sorting`, async sortValue => {
            let order: SortOrder;
            sortValue.includes("_asc") ? order = SortOrder.ASC : order = SortOrder.DESC
            const response: CoinsMarkets =
                await new CoinGeckoApi().coinsMarkets.getCoinsMarkets(
                    "eur", sortValue)
            await new ArraySortingChecks(response.map<number>(coin => coin.market_cap)).checkNumArraySorted(order)
        });

})