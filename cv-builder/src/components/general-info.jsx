
function FullNameFunc({fullName, updateFullName}) {
    return (
      <div>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName} 
            onChange={updateFullName}
            className="bg-red-500"
          />
        </label>
      </div>
    );
}
  
function AddressFunc ({address, updateAddress}) {
    return (
        <div>
            <label>
             Address:
             <input
               type="text"
               value={address}
               onChange={updateAddress}
             />
          </label>
        </div>
    )
}


function PhoneNOFunc ({phoneNo, updatePhoneNo}) {
    return (
        <div>
            <label>
             Phone-No:
             <input
               type="text"
               value={phoneNo}
               onChange={updatePhoneNo}
             />
          </label>
        </div>
    )
}

function EmailFunc ({email, updateEmail}) {
    return (
        <div>
            <label>
             Email:
             <input
               type="text"
               value={email}
               onChange={updateEmail}
             />
          </label>
        </div>
    )
}

function ObjectiveFunc ({objective, updateObjective}) {
  return (
      <div>
          <label>
           Objective:
           <textarea
            value={objective}
            onChange={updateObjective}
            rows="4"
            cols="50"
           />
        </label>
      </div>
  )
}
export {FullNameFunc , AddressFunc, PhoneNOFunc, EmailFunc, ObjectiveFunc}