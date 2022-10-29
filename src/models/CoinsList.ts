/**
 * Model of response https://api.coingecko.com/api/v3/coins/list
 */
export type CoinsList = CoinInfo[]

export interface CoinInfo {
    id: string
    symbol: string
    name: string
}