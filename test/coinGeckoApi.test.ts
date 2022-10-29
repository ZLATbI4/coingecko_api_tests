import {expect} from "chai";
import {CoinsList} from "../src/models/CoinsList";
import {CoinsMarkets} from "../src/models/CoinsMarkets";
import {CoinGeckoApi} from "../src/CoinGeckoApi";

describe("CoinGecko API tests", async () => {
    let baseUrl: string = "https://api.coingecko.com/api/v3"

    it("Ping returns success message", async function(){
        const geckoSays: string = await new CoinGeckoApi().ping.getGeckoSays()
        expect(geckoSays).to.be.equal("(V3) To the Moon!")
    })

    it('Get coins list', async function () {
        const response: CoinsList = await new CoinGeckoApi().coinsList.getCoinsList()
        expect(response.map<string>(coin => coin.name))
            .to.include("1inch", "1inch token should exists!")
    })

    it('Get coins markets', async function () {
        const imageUrlRegex: RegExp = new RegExp(/^https:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\?.*$/i);
        const response: CoinsMarkets = await new CoinGeckoApi().coinsMarkets.getCoinsMarkets("usd")
        expect(response.map<string>(coin => coin.name)[0]).to.be.equal("Bitcoin")
        response.forEach(coin => expect(coin.image).match(imageUrlRegex, "Should be image link"))
    });
})