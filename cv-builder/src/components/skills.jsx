function SkillNameFunc({skillName, updateSkillName}) {
    return (
      <div>
        <label>
          <input
            type="text"
            value={skillName} 
            onChange={updateSkillName}
            className="p-1 rounded-md w-full bg-slate-50"
          />
        </label>
      </div>
    );
}

function SkillDetailsFunc({skillDetails, updateSkillDetails}) {
    return (
      <div>
        <label>
          <input
            type="text"
            value={skillDetails} 
            onChange={updateSkillDetails}
            className="p-1 rounded-md w-full bg-slate-50"
          />
        </label>
      </div>
    );
}

export {SkillNameFunc, SkillDetailsFunc}