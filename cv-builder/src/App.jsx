
import { useState } from "react";
import FullNameFunc from "./components/general-info";

export default function App () {
  const [fullName ,setFullName] = useState('John Doe')
  function onChangeFullName (e) {
      setFullName(e.target.value)
  }

  return (
    <div>
      <FullNameFunc 
        fullName={fullName}
        onChangeFullName={onChangeFullName}
      />
      <p>{fullName}</p>
      
    </div>
  )
}