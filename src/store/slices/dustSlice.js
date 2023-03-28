import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api/axios";

const initialState = {
  dustInfo: { body: null, header: null },
  loading: false,
  selectedCity: "",
  selectedStation: "",
};
//import.meta.env.VITE_SERVER_API_KEY
const getParameters = ({ pageNo, sidoName }) => ({
  serviceKey: import.meta.env.VITE_SERVER_API_KEY,
  returnType: "json",
  numOfRows: "100",
  pageNo,
  sidoName,
  ver: "1.0",
});

export const getDustInfo = createAsyncThunk(
  "dust/getDustInfo",
  async ({ pageNo = "1", sidoName = "전국" } = {}) => {
    const response = await instance.get("/getCtprvnRltmMesureDnsty", {
      params: getParameters({ pageNo, sidoName }),
    });

    return response.data;
  }
);

export const dustSlice = createSlice({
  name: "dust",
  initialState,
  reducers: {
    selectCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    selectStation: (state, action) => {
      state.selectedStation = action.payload;
    },
  },
  extraReducers: {
    [getDustInfo.pending]: (state) => {
      state.loading = true;
    },
    [getDustInfo.fulfilled]: (state, action) => {
      state.loading = false;

      state.dustInfo = {
        body: action.payload?.response.body ?? null,
        header: action.payload?.response.header ?? null,
      };
    },
    [getDustInfo.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { selectCity, selectStation } = dustSlice.actions;

export default dustSlice.reducer;
