import { configureStore } from "@reduxjs/toolkit";
import PatientRecordReducer from "./slice1";

const store = configureStore({
  reducer: {
    patients: PatientRecordReducer,
  },
});

export default store;
