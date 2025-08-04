import { ChainId } from '../constants/chainIds';
import { Token } from './Token';

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WNATIVE: { [chainId: number]: Token } = {
  [ChainId.Holesky]: new Token(
    ChainId.Holesky,
    '0x94373a4919b3240d86ea41593d5eba789fef3848',
    18,
    'WETH',
    'Wrapped ETH'
  ),
  [ChainId.BerachainTestnet]: new Token(
    ChainId.BerachainTestnet,
    '0x6969696969696969696969696969696969696969',
    18,
    'BERA',
    'BERA'
  ),
  [ChainId.BerachainMainnet]: new Token(
    ChainId.BerachainMainnet,
    '0x6969696969696969696969696969696969696969',
    18,
    'BERA',
    'BERA'
  ),
  [ChainId.BSC]: new Token(
    ChainId.BSC,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'BNB',
    'BNB'
  ),
};
