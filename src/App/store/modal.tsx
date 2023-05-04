import { ReactElement } from "react";

interface IStoreModalState{
  show:boolean,
  title:string,
  content:ReactElement|Array<ReactElement|string>|string
  okFunction: Function
  cancelFunction:undefined|Function
}
const initialState:IStoreModalState = {
  show: false,
  title: "",
  content: "",
  okFunction: () => {},
  cancelFunction:undefined,
};
const modalReducer = (state = initialState, action:{ type:string, payload:IStoreModalState }) => {
  switch (action.type) {
    case "modal/show":
      return { ...action.payload };
    case "modal/ok":
      state.okFunction();
      return initialState;
    case "modal/cancel":
     if(undefined!== state.cancelFunction){ state.cancelFunction();}
      return initialState;

    default:
      return state;
  }
};

export const showModal = (
  title:string,
  content:string,
  okFunction:Function=initialState.okFunction,
  cancelFunction:Function|undefined = initialState.cancelFunction
) => {
  return {
    type: "modal/show",
    payload: {
      show: true,
      title:title,
      content: content,
      okFunction: okFunction,
      cancelFunction: cancelFunction,
    },
  };
};

export function okModal() {
  return { type: "modal/ok" };
}

export function cancelModal() {
  return { type: "modal/cancel" };
}

export default modalReducer;
