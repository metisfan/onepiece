import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'WAIFU-fUSDT',
    lpAddresses: {
      250: '0xC4045e90f65dD0405aC6CeAb18Eb37C29A1Bb990',
      97: '',
    },
    tokenSymbol: 'WAIFU',
    tokenAddresses: {
      250: '0xa99a2A440494299476f4ceB1696433c66c0d7358',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'WAIFU-WFTM',
    lpAddresses: {
      250: '0x1A07372a4B17040BDeeCD416249C1171974199da',
      97: '',
    },
    tokenSymbol: 'COAL',
    tokenAddresses: {
      250: '0xa99a2A440494299476f4ceB1696433c66c0d7358',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 2,
    risk: 1,
    lpSymbol: 'WFTM-USDC',
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
    lpSymbol: 'WFTM-USDT',
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
    lpSymbol: 'WFTM-DAI',
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
    lpSymbol: 'BOO-WFTM',
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
    lpSymbol: 'WETH-WFTM',
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
    lpSymbol: 'WBTC-WFTM',
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
    lpSymbol: 'WAIFU',
    lpAddresses: {
      250: '0xC4045e90f65dD0405aC6CeAb18Eb37C29A1Bb990',
      97: '', // COAL-USDT LP
    },
    tokenSymbol: 'WAIFU',
    tokenAddresses: {
      250: '0xa99a2A440494299476f4ceB1696433c66c0d7358',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 9,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'WFTM',
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
    pid: 10,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'USDC',
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
    pid: 11,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
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
    pid: 12,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'MIM',
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
    pid: 13,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'DAI',
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
    pid: 14,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'WBTC',
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
    pid: 15,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'WETH',
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
    pid: 16,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BOO',
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
