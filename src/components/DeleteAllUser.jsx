import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteusers } from "../Store/Slice/UserSlice";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const clearAllUsers = () => {
    dispatch(deleteusers())
  }
  return <Wrapper>
    <button className="btn clear-btn" onClick={() => clearAllUsers()}>Clear Users</button>;
  </Wrapper>
};

const Wrapper = styled.section`
.clear-btn{
  text-transform: capitalize;
  background-color: #db338a;
  margin-top: 2.2rem;
}
}
`