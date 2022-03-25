import { useContext } from "react";
import GlobalContext from '../contexts/GloalContext';

function useGlobal() {
  return useContext(GlobalContext);
}

export default useGlobal;