import { constants } from '../constants'

function addressesURL(branch) {
  const URL = `https://raw.githubusercontent.com/${constants.organization}/${constants.repoName}/${branch}/${
    constants.addressesSourceFile
  }`
  console.log(URL)
  return URL
}

function ABIURL(branch, contract) {
  const URL = `https://raw.githubusercontent.com/${constants.organization}/${constants.repoName}/${branch}/abis/${
    constants.ABIsSources[contract]
  }`
  console.log(URL)
  return URL
}

function getABI(branch, contract) {
  if (contract == 'KeysManager')
    return [
      {
        anonymous: false,
        inputs: [{ indexed: false, name: 'key', type: 'address' }, { indexed: false, name: 'action', type: 'string' }],
        name: 'MiningKeyChanged',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: 'key', type: 'address' },
          { indexed: true, name: 'miningKey', type: 'address' },
          { indexed: false, name: 'action', type: 'string' }
        ],
        name: 'VotingKeyChanged',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: 'key', type: 'address' },
          { indexed: true, name: 'miningKey', type: 'address' },
          { indexed: false, name: 'action', type: 'string' }
        ],
        name: 'PayoutKeyChanged',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'miningKey', type: 'address' },
          { indexed: true, name: 'votingKey', type: 'address' },
          { indexed: true, name: 'payoutKey', type: 'address' }
        ],
        name: 'ValidatorInitialized',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'initialKey', type: 'address' },
          { indexed: false, name: 'time', type: 'uint256' },
          { indexed: false, name: 'initialKeysCount', type: 'uint256' }
        ],
        name: 'InitialKeyCreated',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [{ indexed: false, name: 'name', type: 'string' }, { indexed: false, name: 'key', type: 'address' }],
        name: 'Migrated',
        type: 'event'
      },
      {
        constant: true,
        inputs: [{ name: '_currentKey', type: 'address' }, { name: '_newKey', type: 'address' }],
        name: 'checkIfMiningExisted',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'maxLimitValidators',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'pure',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'maxOldMiningKeysDeepCheck',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'pure',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'masterOfCeremony',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'previousKeysManager',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'proxyStorage',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'poaNetworkConsensus',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'maxNumberOfInitialKeys',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'pure',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'initialKeysCount',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_initialKey', type: 'address' }],
        name: 'getInitialKeyStatus',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_payoutKey', type: 'address' }],
        name: 'miningKeyByPayout',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_votingKey', type: 'address' }],
        name: 'miningKeyByVoting',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_miningKey', type: 'address' }],
        name: 'miningKeyHistory',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_miningKey', type: 'address' }],
        name: 'successfulValidatorClone',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_miningKey', type: 'address' }],
        name: 'validatorKeys',
        outputs: [
          { name: 'validatorVotingKey', type: 'address' },
          { name: 'validatorPayoutKey', type: 'address' },
          { name: 'isValidatorMiningActive', type: 'bool' },
          { name: 'isValidatorVotingActive', type: 'bool' },
          { name: 'isValidatorPayoutActive', type: 'bool' }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'initDisabled',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_previousKeysManager', type: 'address' }],
        name: 'init',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_miningKey', type: 'address' }],
        name: 'migrateMiningKey',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_initialKey', type: 'address' }],
        name: 'migrateInitialKey',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_initialKey', type: 'address' }],
        name: 'initiateKeys',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: '_miningKey', type: 'address' },
          { name: '_votingKey', type: 'address' },
          { name: '_payoutKey', type: 'address' }
        ],
        name: 'createKeys',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'getTime',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'getVotingToChangeKeys',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_key', type: 'address' }],
        name: 'isMiningActive',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_votingKey', type: 'address' }],
        name: 'isVotingActive',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_miningKey', type: 'address' }],
        name: 'isVotingActiveByMiningKey',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_miningKey', type: 'address' }],
        name: 'isPayoutActive',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_miningKey', type: 'address' }],
        name: 'getVotingByMining',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_miningKey', type: 'address' }],
        name: 'getPayoutByMining',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_miningKey', type: 'address' }],
        name: 'getMiningKeyHistory',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_votingKey', type: 'address' }],
        name: 'getMiningKeyByVoting',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_key', type: 'address' }],
        name: 'addMiningKey',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_key', type: 'address' }, { name: '_miningKey', type: 'address' }],
        name: 'addVotingKey',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_key', type: 'address' }, { name: '_miningKey', type: 'address' }],
        name: 'addPayoutKey',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_key', type: 'address' }],
        name: 'removeMiningKey',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_miningKey', type: 'address' }],
        name: 'removeVotingKey',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_miningKey', type: 'address' }],
        name: 'removePayoutKey',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_key', type: 'address' }, { name: '_oldMiningKey', type: 'address' }],
        name: 'swapMiningKey',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_key', type: 'address' }, { name: '_miningKey', type: 'address' }],
        name: 'swapVotingKey',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_key', type: 'address' }, { name: '_miningKey', type: 'address' }],
        name: 'swapPayoutKey',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ]
  else if (contract == 'PoaNetworkConsensus')
    return [
      {
        constant: true,
        inputs: [{ name: '', type: 'uint256' }],
        name: 'pendingList',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '', type: 'address' }],
        name: 'validatorsState',
        outputs: [
          { name: 'isValidator', type: 'bool' },
          { name: 'isValidatorFinalized', type: 'bool' },
          { name: 'index', type: 'uint256' }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '', type: 'uint256' }],
        name: 'currentValidators',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'wasProxyStorageSet',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'proxyStorage',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'finalized',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'systemAddress',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [{ name: '_masterOfCeremony', type: 'address' }, { name: 'validators', type: 'address[]' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'parentHash', type: 'bytes32' },
          { indexed: false, name: 'newSet', type: 'address[]' }
        ],
        name: 'InitiateChange',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [{ indexed: false, name: 'newSet', type: 'address[]' }],
        name: 'ChangeFinalized',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [{ indexed: false, name: 'proxyStorage', type: 'address' }],
        name: 'MoCInitializedProxyStorage',
        type: 'event'
      },
      {
        constant: true,
        inputs: [],
        name: 'isMasterOfCeremonyRemoved',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'isMasterOfCeremonyRemovedPending',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'masterOfCeremony',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'masterOfCeremonyPending',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'getValidators',
        outputs: [{ name: '', type: 'address[]' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'getPendingList',
        outputs: [{ name: '', type: 'address[]' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [],
        name: 'finalizeChange',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_validator', type: 'address' }, { name: '_shouldFireEvent', type: 'bool' }],
        name: 'addValidator',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_validator', type: 'address' }, { name: '_shouldFireEvent', type: 'bool' }],
        name: 'removeValidator',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_newKey', type: 'address' }, { name: '_oldKey', type: 'address' }],
        name: 'swapValidatorKey',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_newAddress', type: 'address' }],
        name: 'setProxyStorage',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_someone', type: 'address' }],
        name: 'isValidator',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_someone', type: 'address' }],
        name: 'isValidatorFinalized',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'getKeysManager',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'getCurrentValidatorsLength',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'getCurrentValidatorsLengthWithoutMoC',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      }
    ]
  else if (contract == 'ValidatorMetadata')
    return [
      {
        anonymous: false,
        inputs: [{ indexed: true, name: 'miningKey', type: 'address' }],
        name: 'MetadataCleared',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [{ indexed: true, name: 'miningKey', type: 'address' }],
        name: 'MetadataCreated',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'oldMiningKey', type: 'address' },
          { indexed: true, name: 'newMiningKey', type: 'address' }
        ],
        name: 'MetadataMoved',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [{ indexed: true, name: 'miningKey', type: 'address' }],
        name: 'ChangeRequestInitiated',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [{ indexed: true, name: 'miningKey', type: 'address' }],
        name: 'CancelledRequest',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'miningKey', type: 'address' },
          { indexed: false, name: 'votingSender', type: 'address' },
          { indexed: false, name: 'votingSenderMiningKey', type: 'address' }
        ],
        name: 'Confirmed',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [{ indexed: true, name: 'miningKey', type: 'address' }],
        name: 'FinalizedChange',
        type: 'event'
      },
      {
        constant: false,
        inputs: [{ name: '_miningKey', type: 'address' }],
        name: 'clearMetadata',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_oldMiningKey', type: 'address' }, { name: '_newMiningKey', type: 'address' }],
        name: 'moveMetadata',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'proxyStorage',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_miningKey', type: 'address' }],
        name: 'getValidatorName',
        outputs: [{ name: 'firstName', type: 'bytes32' }, { name: 'lastName', type: 'bytes32' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_miningKey', type: 'address' }],
        name: 'validators',
        outputs: [
          { name: 'firstName', type: 'bytes32' },
          { name: 'lastName', type: 'bytes32' },
          { name: 'licenseId', type: 'bytes32' },
          { name: 'fullAddress', type: 'string' },
          { name: 'state', type: 'bytes32' },
          { name: 'zipcode', type: 'bytes32' },
          { name: 'expirationDate', type: 'uint256' },
          { name: 'createdDate', type: 'uint256' },
          { name: 'updatedDate', type: 'uint256' },
          { name: 'minThreshold', type: 'uint256' }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_miningKey', type: 'address' }],
        name: 'pendingChanges',
        outputs: [
          { name: 'firstName', type: 'bytes32' },
          { name: 'lastName', type: 'bytes32' },
          { name: 'licenseId', type: 'bytes32' },
          { name: 'fullAddress', type: 'string' },
          { name: 'state', type: 'bytes32' },
          { name: 'zipcode', type: 'bytes32' },
          { name: 'expirationDate', type: 'uint256' },
          { name: 'createdDate', type: 'uint256' },
          { name: 'updatedDate', type: 'uint256' },
          { name: 'minThreshold', type: 'uint256' }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_miningKey', type: 'address' }],
        name: 'confirmations',
        outputs: [{ name: 'count', type: 'uint256' }, { name: 'voters', type: 'address[]' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'initMetadataDisabled',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: '_firstName', type: 'bytes32' },
          { name: '_lastName', type: 'bytes32' },
          { name: '_licenseId', type: 'bytes32' },
          { name: '_fullAddress', type: 'string' },
          { name: '_state', type: 'bytes32' },
          { name: '_zipcode', type: 'bytes32' },
          { name: '_expirationDate', type: 'uint256' },
          { name: '_createdDate', type: 'uint256' },
          { name: '_updatedDate', type: 'uint256' },
          { name: '_minThreshold', type: 'uint256' },
          { name: '_miningKey', type: 'address' }
        ],
        name: 'initMetadata',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [],
        name: 'initMetadataDisable',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: '_firstName', type: 'bytes32' },
          { name: '_lastName', type: 'bytes32' },
          { name: '_licenseId', type: 'bytes32' },
          { name: '_fullAddress', type: 'string' },
          { name: '_state', type: 'bytes32' },
          { name: '_zipcode', type: 'bytes32' },
          { name: '_expirationDate', type: 'uint256' }
        ],
        name: 'createMetadata',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: '_firstName', type: 'bytes32' },
          { name: '_lastName', type: 'bytes32' },
          { name: '_licenseId', type: 'bytes32' },
          { name: '_fullAddress', type: 'string' },
          { name: '_state', type: 'bytes32' },
          { name: '_zipcode', type: 'bytes32' },
          { name: '_expirationDate', type: 'uint256' }
        ],
        name: 'changeRequest',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [],
        name: 'cancelPendingChange',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_miningKey', type: 'address' }, { name: '_voterMiningKey', type: 'address' }],
        name: 'isValidatorAlreadyVoted',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_miningKey', type: 'address' }],
        name: 'confirmPendingChange',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_miningKey', type: 'address' }],
        name: 'finalize',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'getTime',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'getMinThreshold',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      }
    ]
  let addr = helpers.ABIURL(branch, contract)
  return fetch(addr).then(function(response) {
    return response.json()
  })
}

function getBranch(netId) {
  switch (netId) {
    case '77':
      return 'inb'
    default:
      return 'inb'
  }
}

const helpers = {
  addressesURL,
  ABIURL,
  getABI,
  getBranch
}

export default helpers
