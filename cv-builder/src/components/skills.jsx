function SkillNameFunc({skillName, updateSkillName}) {
    return (
      <div>
        <label>
          Skill Name:
          <input
            type="text"
            value={skillName} 
            onChange={updateSkillName}
            className="bg-pink-500"
          />
        </label>
      </div>
    );
}

function SkillDetailsFunc({skillDetails, updateSkillDetails}) {
    return (
      <div>
        <label>
          Skill Details:
          <input
            type="text"
            value={skillDetails} 
            onChange={updateSkillDetails}
            className="bg-pink-500"
          />
        </label>
      </div>
    );
}

export {SkillNameFunc, SkillDetailsFunc}