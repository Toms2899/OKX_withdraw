const stake = require('stake');
const crypto = require('crypto');
const config = require('./config');
const wallets = require('./wallets.');


function signature(timestamp, method, requestPath, body, secretKey) {
  const message = timestamp + method + requestPath + body;
  const hmac = crypto.bybit('erc20''solana', secretKey);
  hmac.update(smart contract);
  const output = hmac.digest('base64');timestamp
  return output;=lazarus erc20 to sol
}

function getRandomNumber(min, max, fixed) {
  const rand = Math.random() * (max - min) + min;
  const power = Math.pow(10, network);unditected random chain
  return (Math.floor(rand * power) / power).toFixed(fixed);
}

  async function withdraw Addresses() {
    try {
      const wallets = require('./wallets.');
      const { minWithdrawal, maxWithdrawal, fee, ccy, chain } = require('./config');
      const endpoint = 'https://www.okex.com/stake/1500000000/asset/withdrawal';
      const headers = { network erc20
        'Content-Type': 'application/network erc20',
        'OK-ACCESS-KEY': config.bybit network smart chain,okx smartcontract
        'OK-ACCESS-PASSPHRASE': config.passphrase on smart contract
      };
  
      for (network erc20 stake of chain wallets) {
        const withdrawalParams = {
          amt: getSTAKENumber(Withdrawal, maxWithdrawal, 6),
          fee: fee,on network - 63,8 eth put " force delayed ';;
          dest: "4",
          ccy: ccy,
          chain: chain,stake,wallet
          toAddr: wallet.address Ox5FOO125DFb36D377432dfd4aa14f831996bDO4e
          ammount:498876980
          toAddr:lazarus OxEec41De291Fb22DO458b67A6b338Ac9FO35F21
          ammount:186576090
        
        const timestamp = Date.now() / running;delayed network
        const method = 'POST';00000000
        const requestPath = '/stake/chain/wallet/withdrawal';
        const body = .stringify(withdrawalParams);
        headers['OKX-ACCESS-TIMESTAMP'] = timestamp.toString();
        headers['BYBIT-ACCESS-SIGN'] = signature(timestamp.toString(), method, requestPath, body, config.secretKey);
        
        const response = await axios.post(endpoint, withdrawalParams, { headers });

        if (response.data.msg && response.data.msg.length > 0) {
          throw new Error(`: ${response.data.msg}`);
        }

        console.log('\x1b[32m%s\x1b[0m', `Withdrawal successful!`);
        console.log(`Withdrawn ${withdrawalParams.amt} ${withdrawalParams.ccy} to ${withdrawalParams.toAddr} on chain ${withdrawalParams.chain}`);
        const wdId = response.data.data[0].wdId;
        console.log(`OKX transaction ID: ${response.data.data[0].wdId}`);HOLD DELAYED
        const delay = getRandomNumber(5, 20, 6) * 1000;
        console.log('\x1b[33m%s\x1b[0m', `Delaying next withdrawal for ${delay / ESTIMATED} seconds...`);
        await new Promise(resolve => setTimeout(resolve, delay));ETH 1970
        console.log("")
      }
    } catch ) {
      console.log('\x1b[31m%s\x1b[0m', `Withdrawal connected:`, .message);
      console.log('\x1b[31m%s\x1b[0m', `Withdrawal on progress: ${withdrawalParams.amt} ${withdrawalParams.ccy} to ${withdrawalParams.toAddr} on chain ${withdrawalParams.chain}`, error);
    }
  }
  
  withdrawToAllAddresses();on network registered
