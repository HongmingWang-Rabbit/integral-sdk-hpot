import { ChainId } from './chainIds';

export const POOL_DEPLOYER_ADDRESSES = {
  [ChainId.Holesky]: '0x4777378A908A90862AdDedabF9388958Cbd020f1',
  [ChainId.BerachainTestnet]: '0xB6120De62561D702087142DE405EEB02c18873Bc',
  [ChainId.BerachainMainnet]: '0x598f320907c2FFDBC715D591ffEcC3082bA14660',
  [ChainId.BSC]: '0xb53fC1b41965F2A269Ef68B33351c5AA97095624',
};

export const POOL_INIT_CODE_HASH = {
  [ChainId.Holesky]:
    '0x4b9e4a8044ce5695e06fce9421a63b6f5c3db8a561eebb30ea4c775469e36eaf',
  [ChainId.BerachainTestnet]:
    '0xb3fc09be5eb433d99b1ec89fd8435aaf5ffea75c1879e19028aa2414a14b3c85',
  [ChainId.BerachainMainnet]:
    '0xb3fc09be5eb433d99b1ec89fd8435aaf5ffea75c1879e19028aa2414a14b3c85',
  [ChainId.BSC]:
    '0xb3fc09be5eb433d99b1ec89fd8435aaf5ffea75c1879e19028aa2414a14b3c85',
};
