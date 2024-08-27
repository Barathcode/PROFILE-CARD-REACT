import PropTypes from "prop-types"

const userData = [
  {
    name:"Sara",
    city:"Newyork", 
    description:"Front End Developer",
    skills:["UI/UX", "Front End Development", "HTML", "CSS", "JavaScript", "React", "Node"], 
    online:true, 
    profile:"images/image 1.jpg",
  },
  {
    name:"Sandra",
    city:"California", 
    description:"Full Stack Developer",
    skills:["Vlogging", "Web Development", "HTML", "CSS", "JavaScript", "React", "Angular"], 
    online:false, 
    profile:"images/image 2.jpg",
  },
  {
    name:"Sadie",
    city:"San Francisco", 
    description:"Senior Software Developer",
    skills:["C", "C++", "Java Programming", "Python", "C#.Net", "MySQL", "MongoDB"], 
    online:true, 
    profile:"images/image 3.jpg",
  }
]

function UserCard(props){
  return(
    <div className="card-container">
      <img src={props.profile} className="img" alt="Profile img" />
      <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill,index)=>(
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const App = () => {
  return (
    userData.map((user,index)=>(
      <UserCard key={index}
                name={user.name}
                city={user.city}
                description={user.description}
                skills={user.skills}
                online={user.online}
                profile={user.profile} />
    ))
  )
}

export default App

UserCard.proptypes={
  name:PropTypes.string.isRequired,
  city:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  skills:PropTypes.arrayOf(PropTypes.string).isRequired,
  online:PropTypes.string.isRequired,
  profile:PropTypes.string.isRequired,
}