import { useState } from "react";
import { FullNameFunc, AddressFunc, PhoneNOFunc , EmailFunc } from "./components/general-info";

export default function App () {
  const [fullName, setFullName] = useState('John Doe')
  const [address, setAddress] = useState('123, Main Street, New-York, USA')
  const [phoneNo, setPhoneNo] = useState('+123 456 789')
  const [email, setEmail] = useState('john.doe@email.com')

  return (
    <div>
      <FullNameFunc 
        fullName={fullName}
        updateFullName={(e) => setFullName(e.target.value)}
      />
      <AddressFunc
        address={address}
        updateAddress={(e) => setAddress(e.target.value)}
      />
      <PhoneNOFunc
        phoneNo={phoneNo}
        updatePhoneNo={(e) => setPhoneNo(e.target.value)} 
      />
      <EmailFunc
        email={email}
        updateEmail={(e) => setEmail(e.target.value)}
      />

      <p>{fullName}</p>
      <p>{address}</p>
      <p>{phoneNo}</p>
      <p>{email}</p>

    </div>
  )
}