
function FullNameFunc({fullName, updateFullName}) {
    return (
      <div>
        <label>
          <input
            className="p-1 rounded-md w-full bg-slate-50"
            type="text"
            value={fullName} 
            onChange={updateFullName}
          />
        </label>
      </div>
    );
}
  
function AddressFunc ({address, updateAddress}) {
    return (
        <div>
            <label>
             <input
               className="p-1 rounded-md w-full bg-slate-50"
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
             <input
               className="p-1 rounded-md w-full bg-slate-50"
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
             <input
               className="p-1 rounded-md w-full bg-slate-50"
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
           <textarea
            className="p-1 rounded-md w-full bg-slate-50"
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