import {PingController} from "./controller/PingController";
import {CoinsListController} from "./controller/CoinsListController";
import {CoinsMarketsController} from "./controller/CoinsMarketsController";

export class CoinGeckoApi{
    ping = new PingController();
    coinsList = new CoinsListController();
    coinsMarkets = new CoinsMarketsController();
}