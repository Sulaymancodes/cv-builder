function ReferenceName({referenceName, updateReferenceName}) {
    return (
      <div>
        <label>
          Reference Name:
          <input
            type="text"
            value={referenceName} 
            onChange={updateReferenceName}
            className="bg-yellow-500"
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
            className="bg-yellow-500"
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
          className="bg-yellow-500"
        />
      </label>
    </div>
  );
}


export { ReferenceName, ReferenceTitle, ReferenceMail }
