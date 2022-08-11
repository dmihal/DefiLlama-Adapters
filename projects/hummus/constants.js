/**
 * lp token addresses
 */
// USD1
const USD1_mUSDC_LP = "0x9E3F3Be65fEc3731197AFF816489eB1Eb6E6b830";
const USD1_mUSDT_LP = "0x9F51f0D7F500343E969D28010C7Eb0Db1bCaAEf9";
const USD1_mDAI_LP = "0x0CAd02c4c6fB7c0d403aF74Ba9adA3bf40df6478";
const USD1_DAI_LP = "0xd5A0760D55ad46B6A1C46D28725e4C117312a7aD"; // deprecated

/**
 * token addresses
 */
const mUSDC = "0xEA32A96608495e54156Ae48931A7c20f0dcc1a21";
const mUSDT = "0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC";
const mDAI = "0x4c078361FC9BbB78DF910800A991C7c3DD2F6ce0";
const DAI = "0x4651B38e7ec14BB3db731369BFE5B08F2466Bd0A"; // deprecated

module.exports = {
  DAI: {
    id: "dai",
    addresses: [
      {
        token: mDAI,
        lpTokens: [USD1_mDAI_LP],
      },
    ],
  },
  mUSDC: {
    id: "usd-coin",
    addresses: [
      {
        token: mUSDC,
        lpTokens: [
          USD1_mUSDC_LP,
        ],
      },
    ],
  },
  mUSDT: {
    id: "tether",
    addresses: [
      {
        token: mUSDT,
        lpTokens: [USD1_mUSDT_LP],
      },
    ],
  },
};
