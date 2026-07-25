import { RecoilRoot } from "recoil";
import Parent from "./components/Parent";

// Recoil is only available in react 18 versions, so make sure you are using react 18 version

export default function App() {
  return(
    <RecoilRoot>
      <Parent />
    </RecoilRoot>
  )
}