export enum Network {
  Mainnet = 'main',
  Testnet = 'net'
}

export type Func = {
  name: string;
  inputs: {
    name: string;
    type: string;
  }[];
}

export type ABI = {
  functions: Func[];
}

export type Field = {
  name: string;
  array: boolean;
}

export type Keys = {
  public: string;
  secret: string;
}

export type Params = {
  [key: string]: string | string[];
}