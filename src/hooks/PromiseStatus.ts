import { useState } from "react";

export enum PromiseStatus {
  Initial = "initial",
  Loading = "loading",
  Loaded  = "loaded"
};

export const usePromiseStatus = () => {
  const [promiseStatus, setPromiseStatus] = useState(PromiseStatus.Initial);

  const setInitial = () => setPromiseStatus(PromiseStatus.Initial);
  const setLoading = () => setPromiseStatus(PromiseStatus.Loading);
  const setLoaded  = () => setPromiseStatus(PromiseStatus.Loaded);

  return {
    promiseStatus,
    setInitial,
    setLoading,
    setLoaded
  };
};