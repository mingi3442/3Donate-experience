import React, { useRef, useState } from "react";
import "../App.css";
import fileImg from "../assets/create-insert-file.jpg";
import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Dataheader from "./Dataheader";
import axios from "axios";

const Write = () => {
  const titleInput = useRef();
  const contentInput = useRef();
  const nameInput = useRef();
  const descriptionInput = useRef();
  const labelInput = useRef();
  const typeInput = useRef();
  const fileUploader = useRef();

  const history = useHistory();

  const [file, setfile] = useState();
  const [isLoading, setLoading] = useState(false);
  const [inputFields, setInputFields] = useState([{ label: "", type: "" }]);

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const [state, setState] = useState({
    title: "",
    contents: "",
    nftName: "",
    nftDescription: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (state.title.length < 1) {
      titleInput.current.focus();
      return;
    } else if (state.contents.length < 1) {
      contentInput.current.focus();
      return;
    } else if (state.nftName.length < 1) {
      nameInput.current.focus();
      return;
    } else if (state.nftDescription.length < 1) {
      descriptionInput.current.focus();
      return;
    } else if (inputFields[0].label.length < 1) {
      labelInput.current.focus();
      return;
    } else if (inputFields[0].type.length < 1) {
      typeInput.current.focus();
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("title", state.title);
    formData.append("nftName", state.nftName);
    formData.append("nftImage", file);
    formData.append("nftDescription", state.nftDescription);
    formData.append("data", JSON.stringify(inputFields));
    console.log("inputFields", inputFields);
    formData.append("contents", state.contents);

    const post = await axios
      .post("http://localhost:4999/post/save", formData)
      .then(() => {
        setLoading(false);
      });
    console.log("post", post);

    history.push("/post");
    console.log(
      state.nftName,
      state.nftDescription,
      state.title,
      state.contents,
      inputFields
    );
    alert("?????? ?????????????????????.");
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { label: "", type: "" }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleChange = (e) => {
    const maxSize = 100 * 1024 * 1024;

    if (e.target.files[0].size > maxSize) {
      alert("???????????? ???????????? 100MB ????????? ?????? ???????????????.");
    } else {
      setfile(e.target.files[0]);
    }
  };

  const handleClick = (e) => {
    fileUploader.current.click();
  };

  return (
    <div className="board__container">
      <Dataheader />
      <div className="board__create--content">
        <h2 className="board__create--title">3Donate Certificate</h2>
        <div>
          Image, Audio
          <sup className="board__create--sup-red">*</sup>
        </div>
        <div className="board__create--item-data-form">
          File types supported: JPG, PNG, GIF, SVG, MP3, MP4. Max size: 100 MB
        </div>
        <div className="board__NFT--container">
          <div className="board__create--input-box">
            <div
              className="board__create--input-box-file"
              onClick={handleClick}
            >
              <img
                src={file ? URL.createObjectURL(file) : fileImg}
                alt="no img"
                className={
                  file
                    ? "board__create--input-box-file-img-change"
                    : "board__create--input-box-file-img"
                }
              />
              <input
                type="file"
                ref={fileUploader}
                onChange={handleChange}
                accept="image/*, audio/*, video/*"
                style={{ display: "none" }}
              />
            </div>
          </div>
          <dl className="board__write--NFTname">
            <dt>NFT Name</dt>
            <dd>
              <input
                className="board__NFT--name"
                ref={nameInput}
                name="nftName"
                value={state.nftName}
                type="text"
                placeholder="?????? ??????"
                onChange={handleChangeState}
              ></input>
            </dd>
            <dt>NFT Description</dt>
            <dd>
              <textarea
                className="board__NFT--description"
                ref={descriptionInput}
                name="nftDescription"
                value={state.nftDescription}
                placeholder="NFT ??????"
                onChange={handleChangeState}
              ></textarea>
            </dd>
          </dl>
        </div>
      </div>

      <div className="board__write--container">
        <div className="board__write">
          <div className="board__write--title">
            <dl>
              <dt>??????</dt>
              <dd>
                <input
                  ref={titleInput}
                  name="title"
                  value={state.title}
                  type="text"
                  placeholder="?????? ??????"
                  onChange={handleChangeState}
                ></input>
              </dd>
            </dl>
          </div>
          <div className="board__write--info">
            <div className="board__write--type">
              {inputFields.map((inputField, index) => (
                <div key={index}>
                  <dl>
                    <dt>??????</dt>
                    <dd>
                      <input
                        ref={labelInput}
                        className="board__label"
                        type="text"
                        placeholder="?????? ??????"
                        name="label"
                        value={inputField.label}
                        onChange={(event) => handleChangeInput(index, event)}
                      ></input>
                    </dd>
                  </dl>
                  <dl>
                    <dt>?????? ??????</dt>
                    <dd>
                      <select
                        ref={typeInput}
                        className="board__file"
                        value={inputField.type}
                        name="type"
                        onChange={(event) => handleChangeInput(index, event)}
                      >
                        <option value="">-- ?????? ?????? --</option>
                        <option value="Image">?????????</option>
                        <option value="Audio">?????????</option>
                      </select>
                    </dd>
                    <div className="board__icon">
                      <IconButton onClick={() => handleAddFields()}>
                        <AddIcon />
                      </IconButton>
                      <IconButton onClick={() => handleRemoveFields(index)}>
                        <RemoveIcon />
                      </IconButton>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
          <div className="board__write--cont">
            <textarea
              ref={contentInput}
              name="contents"
              placeholder="?????? ??????"
              value={state.contents}
              onChange={handleChangeState}
            ></textarea>
          </div>
        </div>
        <div className="board__btn--container">
          {!isLoading && (
            <button
              type="submit"
              onClick={handleSubmit}
              className="board__btn--on"
            >
              ??????
            </button>
          )}
          {isLoading && (
            <button type="submit" disabled className="board__btn--on">
              <i
                className="fas fa-spinner fa-spin"
                style={{ marginRight: "10px" }}
              ></i>
              ?????? ....
            </button>
          )}
          <button
            className="board__btn--off"
            onClick={() => history.push("/post")}
          >
            ??????
          </button>
        </div>
      </div>
    </div>
  );
};

export default Write;
