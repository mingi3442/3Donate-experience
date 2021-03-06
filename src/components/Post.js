import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { Button, Snackbar } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const PostContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
`;
export const BtnContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  padding-bottom: 8px;
  width: 60vh;
  display: flex;
  flex-direction: row;
  border-bottom: 0.1px solid rgba(0, 0, 0, 0.1);
`;

export default function AlignItemsList({ title, desc, imgAddr, seq }) {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Container>
      <PostContainer>
        <Link to={`/view/${seq}`}>
          <ListItem sx={{ m: 1 }} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sx={{ width: 48, height: 48 }} r alt="Post" src={imgAddr} />
            </ListItemAvatar>
            <ListItemText
              primary={title}
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: "inline", width: "60%" }} component="span" variant="body2" color="text.primary"></Typography>
                  {desc}
                </React.Fragment>
              }
            />
          </ListItem>
        </Link>
      </PostContainer>
      <BtnContainer>
        <Button
          size="small"
          onClick={handleClick({
            vertical: "top",
            horizontal: "center",
          })}
          variant="contained"
          endIcon={<ArrowCircleDownIcon />}
        >
          ????????????
        </Button>
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} onClose={handleClose} message="Experience???????????? ??????????????? ??????????????????." key={vertical + horizontal} />
      </BtnContainer>
      <Divider />
    </Container>
  );
}
