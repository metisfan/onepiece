import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'LUFFY-fUSDT',
    lpAddresses: {
      250: '0xd2292fF8De4946173Ea70687c5d978226Dc7F3B8',
      97: '',
    },
    tokenSymbol: 'LUFFY',
    tokenAddresses: {
      250: '0x0f274e0F1C43C400a88A2CFeB099360336383Ce4',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'LUFFY-WFTM',
    lpAddresses: {
      250: '0x1Cc67f6512D6aFef1b15Bbb4D9bDf07bB305741c',
      97: '',
    },
    tokenSymbol: 'LUFFY',
    tokenAddresses: {
      250: '0x0f274e0F1C43C400a88A2CFeB099360336383Ce4',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 2,
    risk: 1,
    lpSymbol: 'Low APR: WFTM-USDC',
    lpAddresses: {
      250: '0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c',
      97: '',
    },
    tokenSymbol: 'WFTM',
    tokenAddresses: {
      250: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'Medium APR: WFTM-USDT',
    lpAddresses: {
      250: '0x5965e53aa80a0bcf1cd6dbdd72e6a9b2aa047410',
      97: '',
    },
    tokenSymbol: 'WFTM',
    tokenAddresses: {
      250: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 4,
    risk: 3,
    lpSymbol: 'High APR: WFTM-DAI',
    lpAddresses: {
      250: '0xe120ffBDA0d14f3Bb6d6053E90E63c572A66a428',
      97: '',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      250: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },

  {
    pid: 5,
    risk: 2,
    lpSymbol: 'Low APR: BOO-WFTM',
    lpAddresses: {
      250: '0xEc7178F4C41f346b2721907F5cF7628E388A7a58',
      97: '',
    },
    tokenSymbol: 'BOO',
    tokenAddresses: {
      250: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 6,
    risk: 1,
    lpSymbol: 'Medium APR: WETH-WFTM',
    lpAddresses: {
      250: '0xf0702249f4d3a25cd3ded7859a165693685ab577',
      97: '',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      250: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 7,
    risk: 4,
    lpSymbol: 'High APR: WBTC-WFTM',
    lpAddresses: {
      250: '0xFdb9Ab8B9513Ad9E419Cf19530feE49d412C3Ee3',
      97: '',
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      250: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 8,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'LUFFY',
    lpAddresses: {
      250: '0xd2292fF8De4946173Ea70687c5d978226Dc7F3B8',
      97: '', // LUFFY-USDT LP
    },
    tokenSymbol: 'LUFFY',
    tokenAddresses: {
      250: '0x0f274e0F1C43C400a88A2CFeB099360336383Ce4',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 9,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'Good APR: LQDR',
    lpAddresses: {
      250: '0x506DdcC751C7d500F983FfdA6DdEfbE458Ba2c33',
      97: '', // LQDR-wftm
    },
    tokenSymbol: 'LQDR',
    tokenAddresses: {
      250: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 10,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'Good APR: TOMB',
    lpAddresses: {
      250: '0x2a651563c9d3af67ae0388a5c8f89b867038089e',
      97: '', // TOMB-wftm
    },
    tokenSymbol: 'TOMB',
    tokenAddresses: {
      250: '0x6c021Ae822BEa943b2E66552bDe1D2696a53fbB7',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 11,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'Good APR: TSHARE',
    lpAddresses: {
      250: '0x4733bc45ef91cf7ccecaeedb794727075fb209f2',
      97: '', // TSHARE-wftm
    },
    tokenSymbol: 'TSHARE',
    tokenAddresses: {
      250: '0x4cdf39285d7ca8eb3f090fda0c069ba5f4145b37',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 12,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'Good APR: BELUGA',
    lpAddresses: {
      250: '0xFB53a7cA9D93040240479379dc7b4B74EB819179',
      97: '', // BELUGA-wftm
    },
    tokenSymbol: 'BELUGA',
    tokenAddresses: {
      250: '0x4A13a2cf881f5378DEF61E430139Ed26d843Df9A',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 13,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'Good APR: RING',
    lpAddresses: {
      250: '0x6132ce6aa7c4f25963bfb98bbd1c3d3f9c90a054',
      97: '', // RING-wftm
    },
    tokenSymbol: 'RING',
    tokenAddresses: {
      250: '0x582423C10c9e83387a96d00A69bA3D11ee47B7b5',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 14,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'Low APR: USDT',
    lpAddresses: {
      250: '0x5965e53aa80a0bcf1cd6dbdd72e6a9b2aa047410',
      97: '', // FTM-USDC LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      250: '0x049d68029688eAbF473097a2fC38ef61633A3C7A',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 15,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'Medium APR: USDC',
    lpAddresses: {
      250: '0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c',
      97: '', // FTM-USDC
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      250: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 16,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'High APR: MIM',
    lpAddresses: {
      250: '0x6f86e65b255c9111109d2D2325ca2dFc82456efc',
      97: '', // MIM-FTM LP
    },
    tokenSymbol: 'MIM',
    tokenAddresses: {
      250: '0x82f0B8B456c1A451378467398982d4834b6829c1',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 17,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'Ultra High APR: DAI',
    lpAddresses: {
      250: '0xe120ffBDA0d14f3Bb6d6053E90E63c572A66a428',
      97: '', // FTM-WBTC LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      250: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 18,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'Ultra High APR: WFTM',
    lpAddresses: {
      250: '0x5965e53aa80a0bcf1cd6dbdd72e6a9b2aa047410',
      97: '', // FTM-USDT
    },
    tokenSymbol: 'WFTM',
    tokenAddresses: {
      250: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 19,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'Ultra High APR: WBTC',
    lpAddresses: {
      250: '0xfdb9ab8b9513ad9e419cf19530fee49d412c3ee3',
      97: '', // FTM-WBTC LP
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      250: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 20,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'Ultra High APR: WETH',
    lpAddresses: {
      250: '0xf0702249f4d3a25cd3ded7859a165693685ab577',
      97: '', // FTM-WETH LP
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      250: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 21,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'Ultra High APR: BOO',
    lpAddresses: {
      97: '',
      250: '0xEc7178F4C41f346b2721907F5cF7628E388A7a58', // BRL-USDT LP
    },
    tokenSymbol: 'BOO',
    tokenAddresses: {
      97: '',
      250: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
]

export default farms
