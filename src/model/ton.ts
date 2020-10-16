import { ABI, Keys } from './state'

export type TONConfigData = {
  servers: string[],
  log_verbose?: boolean,
  messageRetriesCount?: number,
  messageExpirationTimeout?: number,
  messageExpirationTimeoutGrowFactor?: number,
  messageProcessingTimeout?: number,
  waitForTimeout?: number,
  networkTimeout?: number,
  useWebSocketForQueries?: boolean,
  outOfSyncThreshold?: number,
  accessKey?: string,
}

export interface TON {
  create (config: TONConfigData): Promise<TON> 
  close(): Promise<void>
  crypto: {
    ed25519Keypair(): Promise<Keys>
  }
  queries: {
    accounts: {
      query (query: Record<string, Record<string, string>>, returns: string): Promise<string[]>
      subscribe (query: Record<string, Record<string, string>>, returns: string, callback: () => void): Promise<string[]>
    }
  }
  contracts: {
    createDeployMessage(options: {
      package: { abi: ABI, imageBase64: string }
      constructorParams: Record<string, string | string[]>
      keyPair: Keys
    }): Promise<{ message: string }>
    sendMessage(message: string): Promise<string>
    waitForDeployTransaction(message: { message: string }, state: string): Promise<{transaction: { id: string }}>
    getDeployData(options: {
      abi: ABI
      imageBase64: string
      publicKeyHex: string
      workchainId: number
    }): Promise<{ address: string }>
  }
}