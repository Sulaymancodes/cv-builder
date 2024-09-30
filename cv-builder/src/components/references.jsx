function ReferenceName({referenceName, updateReferenceName}) {
    return (
      <div>
        <label>
          Reference Name:
          <input
            type="text"
            value={referenceName} 
            onChange={updateReferenceName}
            className="p-1 rounded-md w-full bg-slate-50"
          />
        </label>
      </div>
    );
}

function ReferenceTitle({referenceTitle, updateReferenceTitle}) {
    return (
      <div>
        <label>
          Reference Title:
          <input
            type="text"
            value={referenceTitle} 
            onChange={updateReferenceTitle}
            className="p-1 rounded-md w-full bg-slate-50"
          />
        </label>
      </div>
    );
}

function ReferenceMail({referenceMail, updateReferenceMail}) {
  return (
    <div>
      <label>
        Reference Mail:
        <input
          type="email"
          value={referenceMail} 
          onChange={updateReferenceMail}
          className="p-1 rounded-md w-full bg-slate-50"
        />
      </label>
    </div>
  );
}


export { ReferenceName, ReferenceTitle, ReferenceMail }
