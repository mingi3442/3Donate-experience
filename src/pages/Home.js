import React from "react";
import IndexFirst from "../components/IndexFirst";
import IndexSecond from "../components/IndexSecond";
import IndexThird from "../components/IndexThird";
import IndexFourth from "../components/IndexFourth";
import axios from "axios";

import { useSelector } from "react-redux";

axios.defaults.withCredentials = true;
export default function Home() {
  useSelector((state) => state);

  return (
    <>
      <IndexFirst />
      <IndexSecond />
      <IndexThird />
      <IndexFourth />
    </>
  );
}
