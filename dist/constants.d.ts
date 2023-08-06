import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | number | string;
export declare enum ChainId {
    MAINNET = 8453,
    TESTNET = 84531
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0x05b00D63DbC67874ad44d039213b7DAfB999d184";
export declare const FACTORY_ADDRESS_MAP: {
    8453: string;
    84531: string;
};
export declare const INIT_CODE_HASH = "0x19ad70328741c65d5d53c48e7b0bc363552762ce9e0634f4925c9d50f79bf404";
export declare const INIT_CODE_HASH_MAP: {
    8453: string;
    84531: string;
};
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const FEES_NUMERATOR: JSBI;
export declare const FEES_DENOMINATOR: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
