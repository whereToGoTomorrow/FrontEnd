import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTourInfo = createAsyncThunk(
  "detail/data",
  async (data, thunkAPI) => {
    const response = await axios({
      // url: "https://initserver.herokuapp.com/detail/search",
      // url: "http://halbe5997.shop/trip/search",
      url: "http://54.180.152.35:5000/trip/search",
      method: "post",
      data: {
        startDate: "2021-08-01",
        category: ["C0113", "C0114"],
        areaCode: [1, 2],
        lat: "37.6403324",
        lng: "126.9380102",
        contenttypeid: 25,
      },
      // url: "http://54.180.152.35:5000/trip/search",
      // method: "get",
    });

    // console.log("detail", response.data);

    return response.data;
  }
);

export const getOneTour = createAsyncThunk(
  "detail/getOneTour",
  async (contentid, thunkAPI) => {
    const response = await axios({
      url: `http://54.180.152.35:5000/trip/${contentid}`,
      method: "get",
    });

    // console.log("get one tour", response.data.tripDetail);

    return response.data.tripDetail;
  }
);
