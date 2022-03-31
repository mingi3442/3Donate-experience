// const ADD_POST = "ADD_POST";

const initialState = {
  nftData: [
    {
      nftDescription: "aadasf",
      nftId: "63",
      nftImageIpfsAddr: "https://gateway.pinata.cloud/ipfs/QmaqQaFWxfavrHLzDN5x6M14983qDxrLSazTSCAMuXprNu",
      nftName: "aaa",
    },
    {
      nftDescription: "dsagdasgf",
      nftId: "64",
      nftImageIpfsAddr: "https://gateway.pinata.cloud/ipfs/QmY8yEWJ7DEiZCuvzgvAqJ1RjZsbxcwBBnw3n7naZSmJQv",
      nftName: "dsafsafds",
    },
  ],

  postData: [
    {
      contents: "dfgadgfdgrdf",
      createdAt: "2022-03-31T06:04:35.970Z",
      data: ['[{"label":"dsafdsf","type":"Image"}]'],
      nftDescription: "aadasf",
      nftId: "63",
      nftImageIpfsAddr: "https://gateway.pinata.cloud/ipfs/QmaqQaFWxfavrHLzDN5x6M14983qDxrLSazTSCAMuXprNu",
      nftName: "aaa",
      seq: 12,
      title: "dsagdsg",
      views: 10,
      writer: "aaa",
      __v: 0,
      _id: "624545b218b9ec20ff191209",
    },
    {
      contents: "dsafdsafdsaf",
      createdAt: "2022-03-31T06:04:35.970Z",
      data: ['[{"label":"fdsafdsa","type":"Audio"}]'],
      nftDescription: "dsagdasgf",
      nftId: "64",
      nftImageIpfsAddr: "https://gateway.pinata.cloud/ipfs/QmY8yEWJ7DEiZCuvzgvAqJ1RjZsbxcwBBnw3n7naZSmJQv",
      nftName: "dsafsafds",
      seq: 13,
      title: "dsafdsfdsfdsf",
      views: 1,
      writer: "aaa",
      __v: 0,
      _id: "624546e018b9ec20ff19122a",
    },
    {
      contents: "dsafdsafdsaf",
      createdAt: "2022-03-31T06:04:35.970Z",
      data: ['[{"label":"fdsafdsa","type":"Audio"}]'],
      nftDescription: "dsagdasgf",
      nftId: "64",
      nftImageIpfsAddr: "https://gateway.pinata.cloud/ipfs/QmY8yEWJ7DEiZCuvzgvAqJ1RjZsbxcwBBnw3n7naZSmJQv",
      nftName: "dsafsafds",
      seq: 14,
      title: "dsafdsfdsfdsf",
      views: 1,
      writer: "aaa",
      __v: 0,
      _id: "624546e218b9ec20ff191232",
    },
  ],
  userData: {
    balance: 300,
    nftList: [
      ["63", 1],
      ["67", 0],
      ["68", 0],
      ["71", 0],
    ],
    password: "aaa",
    privateKey: "0xb4731f1759db34b6347c67ce581e504588f23a40ef59c760e491fd7bd198f486",
    userId: "aaa",
    userName: "aaa",
    walletAddr: "0x7e83e207faa532fb81a1589dcf1267bfbb3a97f4",
    __v: 0,
    _id: "623d795e555bf6ca9cbeaa6d",
  },
};
export default function mypage(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
