

import {Quote} from "./commands/quote"




function main() {
  // mainnet example
  // --tokenIn 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48 --tokenOut 0x1f9840a85d5af5bf1d1762f925bdaddc4201f984 --amount 1000 --exactIn --recipient 0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B --protocols v2,v3
  Quote.run(['--tokenIn', '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
             '--tokenOut', '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
             '--amount', '1000', '--exactIn',
             '--recipient', '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B',
             '--protocols', 'v2,v3'
  ])
}

main()
