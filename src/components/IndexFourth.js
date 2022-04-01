import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "@mui/material/Link";
import { Button, Typography } from "@mui/material";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "#2c2c2c",
  fontWeight: 600,
};

const image = {
  height: 55,
  my: 4,
};
const BtnFont = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export default function IndexFourth() {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 150,
      delay: 30,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Box component="section" sx={{ display: "flex", bgcolor: "whitesmoke", overflow: "hidden" }}>
      <Container
        sx={{
          mt: 23,
          mb: 23,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14, fontWeight: 600, fontSize: "38px" }}>
          데이터 수집 단계
        </Typography>

        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box data-aos="fade-up" sx={item}>
              <Box sx={number}>1</Box>
              <Box component="img" src="document.png" alt="document" sx={image} />
              <Typography sx={{ mt: 3, fontSize: "24px", fontWeight: 400 }} variant="h5" align="center">
                필요한 프로젝트 제안
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box data-aos="fade-up" sx={item}>
              <Box sx={number}>2</Box>
              <Box component="img" src="transfer.png" alt="transform" sx={image} />
              <Typography sx={{ mt: 3, fontSize: "24px", fontWeight: 400 }} variant="h5" align="center">
                자신의 데이터를 이용해
              </Typography>
              <Typography sx={{ mt: 0.1, fontSize: "24px", fontWeight: 400 }} variant="h5" align="center">
                프로젝트에 기여
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box data-aos="fade-up" sx={item}>
              <Box sx={number}>3</Box>
              <Box component="img" src="handshake.png" alt="handshake" sx={image} />
              <Typography sx={{ mt: 3, fontSize: "24px", fontWeight: 400 }} variant="h5" align="center">
                {"기여한 프로젝트에 따른 "}
              </Typography>
              <Typography sx={{ mt: 0.1, fontSize: "24px", fontWeight: 400 }} variant="h5" align="center">
                증명서와 토큰 발급{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Link href="/login" underline="none">
          <Button size="large" variant="contained" component="a" sx={{ mt: 18, padding: "5px 60px" }}>
            <BtnFont>시작하기</BtnFont>
          </Button>
        </Link>
      </Container>
    </Box>
  );
}
