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
    nftDescription: "TEST",
    nftId: "71",
    nftImageIpfsAddr:
      "https://images.unsplash.com/photo-1553882951-9c3dab4a50cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNreXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    nftName: "TSET NFT",
    seq: 1,
    title: "테스트 게시글",
    views: 3,
    writer: "testUse",
    __v: 0,
    _id: "62454f7c18b9ec20ff191344",
  },
  {
    contents: "Test 게시글 입니다.",
    createdAt: "2022-03-31T06:04:35.970Z",
    data: ['[{"label":"fdsafdsaf","type":"Image"}]'],
    nftDescription: "TEST",
    nftId: "68",
    nftImageIpfsAddr:
      "https://images.unsplash.com/photo-1465080357990-d4bc259ec4a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2t5fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    nftName: "테스트...",
    seq: 2,
    title: "테스트 프로젝트 제목",
    views: 12,
    writer: "aa",
    __v: 0,
    _id: "62454b4a18b9ec20ff1912a3",
  },
  {
    contents: "게시글",
    createdAt: "2022-03-31T06:04:35.970Z",
    data: ['[{"label":"dsafdsf","type":"Image"}]'],
    nftDescription: "게시글의 내용",
    nftId: "63",
    nftImageIpfsAddr:
      "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2t5fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    nftName: "tests",
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
    nftDescription: "게시글 내용입니다..!",
    nftId: "50",
    nftImageIpfsAddr:
      "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNreXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
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
