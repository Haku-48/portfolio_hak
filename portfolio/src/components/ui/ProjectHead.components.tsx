/** Represent the head of a project in the folder */

interface ProjectHeadProp {
  name: string;
  picture: string;
  onClick: () => void;
}

function ProjectHead({ name, picture, onClick }: ProjectHeadProp) {
  return (
    <div
      className="project_head bg-cover bg-center"
      onClick={onClick}
    >
      <img src={picture} loading="lazy" alt={name}/>
      <div className="project_head_name">
        <h3>{name}</h3>
      </div>
    </div>
  );
}
export default ProjectHead; 
