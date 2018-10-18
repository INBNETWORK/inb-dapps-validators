const constants = {}
constants.organization = 'INBNETWORK'
constants.repoName = 'inb-chain-spec'
constants.addressesSourceFile = 'contracts.json'
constants.ABIsSources = {
  KeysManager: 'KeysManager.abi.json',
  PoaNetworkConsensus: 'PoaNetworkConsensus.abi.json',
  ValidatorMetadata: 'ValidatorMetadata.abi.json',
  ProofOfPhysicalAddress: 'ProofOfPhysicalAddress.abi.json'
}
constants.userDeniedTransactionPattern = 'User denied transaction'

constants.NETWORKS = {
  '77': {
    NAME: 'INB',
    RPC: 'https://rpc.inb.network',
    BRANCH: 'inb',
    TESTNET: true
  }
}

module.exports = {
  constants
}
