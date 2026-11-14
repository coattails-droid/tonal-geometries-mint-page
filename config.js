// Tonal Geometries — mint page configuration.
//
// Deployed on Ethereum mainnet (Series 6; built with John). Address and
// sale parameters read back from the live contract and verified by Muse
// on 2026-11-14: name "Tonal Geometries", symbol TONGEO, mintPrice
// 0.001 ETH, MAX_SUPPLY 150, royalty 1000 bps to coattails.eth.

const CONFIG = {
  CONTRACT_ADDRESS: "0xDa3Ed34Ba176086BcED1F17cc5f0feA4C355EE2f",

  // Ethereum mainnet
  CHAIN_ID: "0x1",
  CHAIN_NAME: "Ethereum mainnet",
  EXPLORER_TX_BASE: "https://etherscan.io/tx/",
  EXPLORER_ADDRESS_BASE: "https://etherscan.io/address/",

  // Sale parameters (must match the deployed contract)
  MAX_SUPPLY: 150,
  MINT_PRICE_WEI_HEX: "0x38d7ea4c68000", // 0.001 ETH, exact — the contract reverts over/underpayment
  MINT_PRICE_ETH: "0.001",

  ROYALTY_BPS: 1000, // 10%
  ROYALTY_RECEIVER_ENS: "coattails.eth",

  // 4-byte selectors of the contract functions the page calls.
  // Verified with `cast sig` and confirmed present in the deployed
  // bytecode on 2026-11-14 (mint(uint256) confirmed absent — the page's
  // no-argument mint() is the contract's mint):
  //   mint() -> 0x1249c58b, totalSupply() -> 0x18160ddd,
  //   mintPrice() -> 0x6817c76c, saleActive() -> 0x68428a1b,
  //   MAX_SUPPLY() -> 0x32cb6b0c
  SELECTORS: {
    mint: "0x1249c58b",
    totalSupply: "0x18160ddd",
    mintPrice: "0x6817c76c",
    saleActive: "0x68428a1b",
    maxSupply: "0x32cb6b0c",
  },
};
