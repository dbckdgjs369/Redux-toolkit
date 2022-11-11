import { configureStore } from "@reduxjs/toolkit"; //기본적인 Redux Create Store에 대한 Wrapper, 올바른 기본값으로 store를 자동으로 설정한다.
//ex) Redux Dev Tools 익스텐션을 자동으로 키고, Thunk 미들웨어를 자동으로 추가하고, 일반적인 실수를 잡아줌.
import counterReducer from "../features/counter/counter-slice";
import { apiSlice } from "../features/dogs/dogs-api-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch; //스토어에 많은 것을 넣어도 타입을 추론해준다.
export type RootState = ReturnType<typeof store.getState>; //스토어에 많은 것을 넣어도 타입을 추론해준다.
