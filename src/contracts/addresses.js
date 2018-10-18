import helpers from './helpers'
import helpersGlobal from '../helpers'
import messages from '../messages'
const local = {
  METADATA_ADDRESS: '0x5d8b28b0c796502ba1cfae75fa0626d2b72b8114',
  KEYS_MANAGER_ADDRESS: '0x55eea4f1a96475f399858cedd9258032e6331c86',
  POA_ADDRESS: '0x8bf38d4764929064f2d4d3a56520a76ab3df415b',
  MOC: '0x78e4c9f0320f2f966603d91beda912b23ed1530a'
}

/*const local = {
  METADATA_ADDRESS: '0xcBB2912666c7e8023B7ec78B6842702eB26336aC',
  KEYS_MANAGER_ADDRESS: '0x2b1dbc7390a65dc40f7d64d67ea11b4d627dd1bf',
  POA_ADDRESS: '0x83451c8bc04d4ee9745ccc58edfab88037bc48cc',
  MOC: '0xCf260eA317555637C55F70e55dbA8D5ad8414Cb0'
}*/

export default web3Config => {
  let branch

  switch (web3Config.netId) {
    case '77':
      branch = 'inb'
      break
    default:
      branch = 'inb'
      break
  }
  return new Promise((resolve, reject) => {
    fetch(helpers.addressesURL(branch))
      .then(response => {
        response.json().then(json => {
          resolve({ addresses: local, web3Config })
        })
      })
      .catch(function(err) {
        let addr = helpers.addressesURL(branch)
        let msg = `
                Something went wrong!<br/><br/>
                ${messages.wrongRepo(addr)}
            `
        helpersGlobal.generateAlert('error', 'Error!', msg)
        reject(err)
      })
  })
}
