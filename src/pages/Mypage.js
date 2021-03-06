import { Avatar, Backdrop, CircularProgress, Divider, List } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Nft from "../components/Nft";
import Post from "../components/Post";

const Container = styled.div`
  position: inherit;
  width: 100%;
  min-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const HeaderContainer = styled.div`
  margin-top: 50px;
  width: 70%;
`;
const TopContainer = styled.div`
  width: 95%;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const ContentFont = styled.div`
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 500;
`;
const UserContainer = styled.div`
  padding: 20px 0;
  margin: 0 30px;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const PostContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  margin: 70px 30px;
  justify-content: center;
  flex-direction: column;
`;

const BottomContainer = styled.div`
  padding: 20px 20px;
  border-top: 0.5px solid #a9a9a9;
  background-color: #fff;
  width: 70%;
  display: flex;
  flex-direction: column;
`;
const UserInfo = styled.div`
  height: 450px;
  width: 330px;
  margin: 10vh auto;
  border-radius: 25px;
  padding-bottom: 1px;
  box-shadow: 1px 3px 3px 3px #919191;
`;
const NftContainer = styled.div`
  margin: 0 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, minmax(1fr, auto));
  margin-bottom: 60px;
`;
const ProfileContainer = styled.div`
  display: flex;
  position: relative;
  background-color: #e6ebee;
  width: 130px;
  height: 130px;
  margin: 40px auto;
  margin-bottom: 30px;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 1.2px 1.2px 1.2px 1px #919191;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 230px;
`;
const InfoContents = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: row;
  width: 90%;
  height: 90px;
`;
const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 60px;
`;
const UserNameFont = styled.div`
  margin-bottom: 30px;
  font-size: 22px;
  font-weight: 600;
`;
const TitleFont = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
`;
const DescFont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: #2c2c2c;
`;

export default function Mypage() {
  const user = useSelector((state) => state.mypage);
  const [myProject, setMyProject] = useState([]);
  const [contribute, setContribute] = useState([]);
  useEffect(() => {
    setMyProject(user.userData.nftList.filter((e) => e[1] === 1));
    setContribute(user.userData.nftList.filter((e) => e[1] === 0));
  }, []);
  return (
    <Container>
      <HeaderContainer>
        <ContentFont>??? ??????</ContentFont>
        <Divider />
        <TopContainer>
          <UserContainer>
            <UserInfo>
              <ProfileContainer></ProfileContainer>

              <InfoContainer>
                <UserNameFont>{user.userData.userName}</UserNameFont>
                <InfoContents style={{ borderTop: "1px solid rgba(0,0,0,0.3)" }}>
                  <InfoContent>
                    <TitleFont>?????? ????????????</TitleFont>
                    <DescFont>{myProject.length} </DescFont>
                  </InfoContent>
                  <InfoContent>
                    <TitleFont>????????? ????????????</TitleFont>
                    <DescFont>{contribute.length}</DescFont>
                  </InfoContent>
                </InfoContents>
                <InfoContents>
                  <InfoContent>
                    <TitleFont>TDT</TitleFont>
                    <DescFont>
                      {user.userData.balance === 0 ? "0" : user.userData.balance}
                      <Avatar sx={{ ml: 0.5, width: "17px", height: "17px" }} alt="token" src="/token.png" />
                    </DescFont>
                  </InfoContent>
                  <InfoContent>
                    <TitleFont>NFT</TitleFont>
                    <DescFont>
                      {user.nftData.length === 0 ? "0" : user.nftData.length} <Avatar sx={{ ml: 0.5, width: "17px", height: "17px" }} alt="trophy" src="/nft.png" />
                    </DescFont>
                  </InfoContent>
                </InfoContents>
              </InfoContainer>
            </UserInfo>
          </UserContainer>
          <PostContainer>
            <ContentFont>????????????</ContentFont>
            <Divider />
            <List sx={{ width: "100%", minWidth: 500, mt: 2 }}>
              {user.postData ? (
                user.postData.map((e) => {
                  return <Post id={e.seq} seq={e.seq} title={e.title} desc={e.nftDescription} imgAddr={e.nftImageIpfsAddr} />;
                })
              ) : (
                <div style={{ padding: "130px 0" }}>
                  <div style={{ fontSize: "22px", fontWeight: "500" }}>????????? ??????????????? ????????????</div>
                </div>
              )}
            </List>
          </PostContainer>
        </TopContainer>
      </HeaderContainer>
      <BottomContainer>
        <ContentFont>?????? NFT</ContentFont>

        <NftContainer>
          {user.nftData ? user.nftData.map((e) => <Nft title={e.nftName} desc={e.nftDescription} img={e.nftImageIpfsAddr} />) : <TopContainer>NFT??? ????????????</TopContainer>}
        </NftContainer>
      </BottomContainer>{" "}
    </Container>
  );
}
