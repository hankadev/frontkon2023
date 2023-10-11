import { createSlice } from "@reduxjs/toolkit";
import { UserReducerState } from "./types";

const initialState: UserReducerState = {
  user: null,
  loggedIn: false,
};
