const ADD_POST = "ADD_POST";
export const addPost = (postData) => {
  return {
    type: ADD_POST,
    postData,
  };
};

const initialState = [
  {
    contents: "테스트 게시글입니다",
    createdAt: "2022-03-31T06:04:35.970Z",
    data: ['[{"label":"fsafsafsaf","type":"Image"}]'],
    nftDescription: "dsaf",
    nftId: "71",
    nftImageIpfsAddr: "https://gateway.pinata.cloud/ipfs/QmYiRkSMLukjFYuwTcxhdz6ncdPT7RE3ak5mYS6KZQrWQD",
    nftName: "dsafd",
    seq: 1,
    title: "테스트 게시글",
    views: 3,
    writer: "aa",
    __v: 0,
    _id: "62454f7c18b9ec20ff191344",
  },
  {
    contents: "Test 게시글 입니다.",
    createdAt: "2022-03-31T06:04:35.970Z",
    data: ['[{"label":"fdsafdsaf","type":"Image"}]'],
    nftDescription: "TEST",
    nftId: "68",
    nftImageIpfsAddr: "https://gateway.pinata.cloud/ipfs/QmaAe62GxPEhxafxRbzsSHKvZoxvoDHvTPBqWj1C6QgRmr",
    nftName: "fdgdf",
    seq: 2,
    title: "fdgfdgfdgdsa",
    views: 12,
    writer: "aa",
    __v: 0,
    _id: "62454b4a18b9ec20ff1912a3",
  },
  {
    contents: "게시글",
    createdAt: "2022-03-31T06:04:35.970Z",
    data: ['[{"label":"dsafdsf","type":"Image"}]'],
    nftDescription: "aadasf",
    nftId: "63",
    nftImageIpfsAddr: "https://gateway.pinata.cloud/ipfs/QmaqQaFWxfavrHLzDN5x6M14983qDxrLSazTSCAMuXprNu",
    nftName: "aaa",
    seq: 3,
    title: "게시글 입니다",
    views: 14,
    writer: "aaa",
    __v: 0,
    _id: "624545b218b9ec20ff191209",
  },
  {
    contents: "게시글 입니다",
    createdAt: "2022-03-31T04:11:53.127Z",
    data: ['[{"label":"dsfdsafgdsf","type":"Image"}]'],
    nftDescription: "dsadsa",
    nftId: "50",
    nftImageIpfsAddr: "https://gateway.pinata.cloud/ipfs/QmUXyZtCzVoybSAuhdMyW6pnp6kWyyj713AWwt8QyfpcZ8",
    nftName: "sadsad",
    seq: 4,
    title: "게시글",
    views: 5,
    writer: "aaaa",
    __v: 0,
    _id: "62452a1964b72be1458eef96",
  },
];
export default function login(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return [...state, { ...action.postData }];
    default:
      return state;
  }
}
