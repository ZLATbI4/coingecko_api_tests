import {expect} from "chai";
import {CoinsList} from "../src/models/CoinsList";
import {CoinGeckoApi} from "../src/CoinGeckoApi";

describe("Simple api methods tests", async () => {
    it("Ping returns success message", async function(){
        const geckoSays: string = await new CoinGeckoApi().ping.getGeckoSays()
        expect(geckoSays).to.be.equal("(V3) To the Moon!")
    })

    it('Get coins list', async function () {
        const response: CoinsList = await new CoinGeckoApi().coinsList.getCoinsList()
        expect(response.map<string>(coin => coin.name))
            .to.include("1inch", "1inch token should exists!")
    })
})