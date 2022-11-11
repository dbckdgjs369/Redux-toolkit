//DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// createSlice는 주요 API 기능
// PayloadAction은 주어진 객체 하나의 내용을 나타내는 TS 유형

interface CounterState {
  value: number;
} //슬라이스 내부 상태 타입

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //포함할 다양한 유형의 로직과 업데이트를 정의할 것
    //증가
    incremented(state) {
      //ES6, 리터럴 구문으로 키워드 없이 정의 가능
      state.value++;
    }, //기존 redux에서는 기존상태를 변경하고 복사본을 만들지 않고, UI에서 변경 사항을 알지 못하기 때문에 굉장히 안 좋은 코드일 것이다.
    //Redux toolkit은 Immer라는 라이브러리를 사용해서 상태 업데이트를 래핑해서 추적한다.=> 복사, 확산, 매핑을 하는 것과 같은 역할을 해준다.
    //감소
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    decremented(state) {},
    //리셋
  },
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
