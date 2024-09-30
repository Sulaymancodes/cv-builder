import { useState } from "react";
import { FullNameFunc, AddressFunc, PhoneNOFunc , EmailFunc, ObjectiveFunc } from "./components/general-info";
import { SchoolFunc, DegreeFunc, StartDateFunc, EndDateFunc } from "./components/education";
import { CompanyNameFunc, PositionFunc, ExperienceStartDateFunc, ExperienceEndDateFunc, DescriptionFunc } from "./components/experience";
import { SkillNameFunc, SkillDetailsFunc } from "./components/skills";
import { ProjectNameFunc, ProjectDetailsFunc } from "./components/projects";
import { ReferenceName, ReferenceTitle, ReferenceMail } from "./components/references";

const objectiveText = 'Highly skilled and motivated Software Engineer with 5+ years of experience in designing and developing innovative software solutions. Seeking a challenging position in a dynamic organization where I can utilize my technical expertise and leadership skills to contribute to the success of the team'
const descriptionText = 'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android'

export default function App () {
  //CV general Info States
  const [fullName, setFullName] = useState('John Doe')
  const [address, setAddress] = useState('123, Main Street, New-York, USA')
  const [phoneNo, setPhoneNo] = useState('+123 456 789')
  const [email, setEmail] = useState('john.doe@email.com')
  const [objective, setObjective] = useState(objectiveText)

  //CV education Info State
  const [school, setSchool] = useState('University Of Texas')
  const [degree, setDegree] = useState('Bsc. Software Engineering')
  const [startDate, setStartDate] = useState('08/2019')
  const [endDate, setEndDate] = useState('06/2023')

  //CV experience Info State
  const [companyName, setCompanyName] = useState('Google')
  const [position, setPosition] = useState('Frontend Developer')
  const [experienceStartDate, setExperienceStartDate] = useState('08/2019')
  const [experienceEndDate, setExperienceEndDate] = useState('06/2023')
  const [description, setDescription] = useState(descriptionText)

  //CV skills Info State
  const [skillName, setSkillName] = useState('Web Development')
  const [skillDetails, setSkillDetails] = useState('HTML, CSS, JavaScript, PHP')

  //CV project Info state
  const [projectName, setProjectName] = useState('E-Commerce WepApp')
  const [projectDetails, setProjectDetails] = useState('Developed a fully functional e-commerce website using Java Spring framework, MySQL database, and React frontend')

  //CV project Reference State
  const [referenceName, setReferenceName] = useState('Mr. John Doe')
  const [referenceTitle, setReferenceTitle] = useState('Prof. at XYZ University')
  const [referenceMail, setReferenceMail] = useState('johndoe123@gmail.com')

  return (
    <div className="grid grid-cols-7 gap-4 bg-slate-50 h-screen">
      <div className="col-span-2 p-2 bg-slate-50 rounded-md overflow-auto">
        <h1 className="text-3xl text-center font-bold mb-4">CV BUILDER 🖋️</h1>
        <hr className="border-gray-500" />
        <br />
        <div className="p-4 bg-slate-200 rounded-md">
          <h1 className="font-bold text-xl text-center">General Info 🪪</h1>
          <p className="font-bold">Full Name</p>
          <FullNameFunc 
            fullName={fullName}
            updateFullName={(e) => setFullName(e.target.value)}
          />
          <p className="font-bold">Address</p>
          <AddressFunc
            address={address}
            updateAddress={(e) => setAddress(e.target.value)}
          />
          <p className="font-bold">Phone No</p>
          <PhoneNOFunc
            phoneNo={phoneNo}
            updatePhoneNo={(e) => setPhoneNo(e.target.value)} 
          />
          <p className="font-bold">Email</p>
          <EmailFunc
            email={email}
            updateEmail={(e) => setEmail(e.target.value)}
          />
          <p className="font-bold">Objectives</p>
          <ObjectiveFunc
            objective={objective}
            updateObjective={(e) => setObjective(e.target.value)}
          />
        </div>
        
        <div className="p-4 bg-slate-200 rounded-md mt-2">
          <h1 className="font-bold text-xl text-center">Educational Experience 🎓</h1>
          <p className="font-bold">School</p>
          <SchoolFunc
            school={school}
            updateSchool={(e) => setSchool(e.target.value)}
          />
          <p className="font-bold">Degree</p>
          <DegreeFunc
            degree={degree}
            updateDegree={(e) => setDegree(e.target.value)}
          />
          <p className="font-bold">Start Date</p>
          <StartDateFunc
            startDate={startDate}
            updateStartDate={(e) => setStartDate(e.target.value)}
          />
          <p className="font-bold">End Date</p>
          <EndDateFunc
            endDate={endDate}
            updateEndDate={(e) => setEndDate(e.target.value)}
          />
        </div>
        
        <div className="p-4 bg-slate-200 rounded-md mt-2">
          <h1 className="font-bold text-xl text-center">Work Experience 👷</h1>
          <p className="font-bold">Company Name</p>
          <CompanyNameFunc
            company={companyName}
            updateCompany={(e) => setCompanyName(e.target.value)}
          />
          <p className="font-bold">Position</p>
          <PositionFunc
            position={position}
            updatePosition={(e) => setPosition(e.target.value)}
          />
          <p className="font-bold">Start Date</p>
          <ExperienceStartDateFunc
            experienceStartDate={experienceStartDate}
            updateExperienceStartDate={(e) => setExperienceStartDate(e.target.value)}
          />
          <p className="font-bold">End Date</p>
          <ExperienceEndDateFunc
            experienceEndDate={experienceEndDate}
            updateExperienceEndDate={(e) => setExperienceEndDate(e.target.value)}
          />
          <p className="font-bold">Details</p>
          <DescriptionFunc
            description={description}
            updateDescription={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="p-4 bg-slate-200 rounded-md mt-2">
          <h1 className="font-bold text-xl text-center">Skills 🔨</h1>
          <p className="font-bold">Skill</p>
          <SkillNameFunc
            skillName={skillName}
            updateSkillName={(e) => setSkillName(e.target.value)}
          />
          <p className="font-bold">Details</p>
          <SkillDetailsFunc
            skillDetails={skillDetails}
            updateSkillDetails={(e) => setSkillDetails(e.target.value)}
          />
        </div>
        
        <div className="p-4 bg-slate-200 rounded-md mt-2">
          <h1 className="font-bold text-xl text-center">Projects 🏢</h1>
          <p className="font-bold">Project Name</p>
          <ProjectNameFunc
            projectName={projectName}
            updateProjectName={(e) => setProjectName(e.target.value)}
          />
          <p className="font-bold">Project Details</p>
          <ProjectDetailsFunc
            projectDetails={projectDetails}
            updateProjectDetails={(e) => setProjectDetails(e.target.value)}
          />
        </div>
        <div className="p-4 bg-slate-200 rounded-md mt-2">
          <h1 className="font-bold text-xl text-center">References 👨‍🎓</h1>
          <p className="font-bold">Reference Name</p>
          <ReferenceName
            referenceName={referenceName}
            updateReferenceName={(e) => setReferenceName(e.target.value)}
          />
          <p className="font-bold">Reference Title</p>
          <ReferenceTitle
            referenceTitle={referenceTitle}
            updateReferenceTitle={(e) => setReferenceTitle(e.target.value)}
          />
          <p className="font-bold">Reference Mail</p>
          <ReferenceMail
            referenceMail={referenceMail}
            updateReferenceMail={(e) => setReferenceMail(e.target.value)}
          />
        </div>
        
      </div>
      <div className="col-span-5">
        <p>{fullName}</p>
        <p>{address}</p>
        <p>{phoneNo}</p>
        <p>{email}</p>
        <p>{objective}</p>
        <br />
        <p>{school}</p>
        <p>{degree}</p>
        <p>{startDate}</p>
        <p>{endDate}</p>
        <br />
        <p>{companyName}</p>
        <p>{position}</p>
        <p>{experienceStartDate}</p>
        <p>{experienceEndDate}</p>
        <p>{description}</p>
        <br />
        <p>{skillName}: {skillDetails}</p>
        <br />
        <p>{projectName}: {projectDetails}</p>
        <br />
        <p>{referenceName}: {referenceTitle} Mail:{referenceMail}</p>
      </div>
      
    </div>
  )
}