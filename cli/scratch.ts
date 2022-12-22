

import {Quote} from "./commands/quote"




function main() {
  // eth mainnet example
  // ./bin/cli quote --tokenIn 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48 --tokenOut 0x1f9840a85d5af5bf1d1762f925bdaddc4201f984 --amount 1000 --exactIn --recipient 0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B --protocols v2,v3
  // Quote.run(['--tokenIn', '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  //            '--tokenOut', '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
  //            '--amount', '1000', '--exactIn',
  //            '--recipient', '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B',
  //            '--protocols', 'v2,v3'])

  // polygon mainnet
  // ./bin/cli quote --tokenIn 0x2791bca1f2de4661ed88a30c99a7a9449aa84174 --tokenOut 0x7ceb23fd6bc0add59e62ac25578270cff1b9f619 --amount 5 --exactIn --minSplits 1 --protocols v3 --router alpha --chainId 137
  // !! make sure env JSON_RPC_PROVIDER_POLYGON is set
  Quote.run(['--tokenIn', '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
             '--tokenOut', '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
              '--amount', '5000', '--exactIn',
              '--minSplits', '1',
              '--protocols', 'v3',
              '--router', 'alpha',
              '--chainId', '137'
  ])
}

main()
