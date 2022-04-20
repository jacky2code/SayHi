/**
 * @Author: Jakcy Chang
 * @Date: 2022-04-18 16:37:01
 * @LastEditors: Jakcy Chang
 * @LastEditTime: 2022-04-19 15:02:26
 * @Description: contractABI
 */
const contractABI = [
	{
		"inputs": [],
		"name": "addcounter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getcounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
// 合约 deploy 以后的地址
const contractAddress = "0x497DA157E267b180Fc7BA807FB6972A6ABDcd90F";

export { contractABI, contractAddress };
