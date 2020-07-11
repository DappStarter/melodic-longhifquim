require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note random universe guess drive flower tobacco'; 
let testAccounts = [
"0x306add363d31918d8e58edde1c4195c07849a78db18b3dc3cb21664afc666d46",
"0xedc3045b57bff027d29cae17c4c539dd2ab7d65ee98d6d30a41f4dc4d6826d51",
"0x31238e5ee070770496e37bb3013ace2eb38c8ea7e1fdecb4b89cf2f547cbb43d",
"0xc0682900ceef42b20d8f414717775fee02fb54c83fbae9f9293434e07ebc6f13",
"0x0a6f31e4ea1d5ad1c6d447c2629c96193786a28fcefc3c7e013c916ef8b7c3ab",
"0xd4a1a0b173e527f28f1e0e5497509870656280b44212871e468127ab8eef4eaa",
"0x90403f1bdccb6988484caadbac1cc722f99a5b64f7abc631288d4c57235ee190",
"0xdabef3d76173d8b66c1fb336795d6ecc5b5a45bcf195e4439ea1404f71a60930",
"0x7f54c3e6db2b78c80f6ce487e2ec42e035cea1e457375cade42cc6d7426dcd15",
"0x57f2a22881159d353fbad58849e170db54604a1c730b690c9639d3c29ec05d13"
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
