require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name rice rural honey hidden civil army gift'; 
let testAccounts = [
"0x4971b33bd0b7f089655c26552427c75baec92e8e40630c3c01fba95039ed3d4f",
"0x7da60430e59508405580abedf4308278789a89f720532cd336b3045955c298a3",
"0x6d0ddd7822e8fc93730d0be76ceee488a7a68260601f44590901b6f506aff0db",
"0x1a30d81fd2e1a754b78bb268df66eb8af8fbb83fa466aa1366607e3609e94ebe",
"0x2d733873fcd39db4d5dd7fc2ff95c20e1083d4a6dc59ae5d34c397328a27356f",
"0x9d1d1836281549af8e597c69d2ccf33774431c0697a70baddda357272ccd674a",
"0x143cdb0aa50e8a0d274040f6457cf50d05a71f38ca7870ccb94d43ba12a92acc",
"0xf3be9076eabd606e34787e5c73c7aecae21b07620e4ac810398ea0487b4dd41c",
"0xedcf3064528747cdf74638e986372f66b528b1533faaee241c0606a9b37efe40",
"0x85112cbf5955879ce86c6f8af485636b61ff66c6162896fe09afcd0a3d864084"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
