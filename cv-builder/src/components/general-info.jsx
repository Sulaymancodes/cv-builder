
// FullNameFunc.jsx
export default function FullNameFunc({ fullName, onChangeFullName }) {
    return (
      <div>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName} // Bind the fullName value to the input
            onChange={onChangeFullName} // Call onChangeFullName when the input value changes
          />
        </label>
      </div>
    );
}
  
function Address ({address, addressUpdate}) {
    return (
        <div>
            <label>
             Address:
             <input
               type="text"
               value={name}>
             </input>
          </label>
        </div>
    )
}

// function Address ({address, addressUpdate}) {
//     return (
//         <div>
//             <label>
//              Address:
//              <input
//                type="text"
//                value={name}>
//              </input>
//           </label>
//         </div>
//     )
// }

// function PhoneNO ({phoneNo, phoneNoUpdate}) {
//     return (
//         <div>
//             <label>
//              Phone-No:
//              <input
//                type="text"
//                value={name}>
//              </input>
//           </label>
//         </div>
//     )
// }

// function Email ({email, emailUpdate}) {
//     return (
//         <div>
//             <label>
//              Email:
//              <input
//                type="text"
//                value={name}>
//              </input>
//           </label>
//         </div>
//     )
// }

