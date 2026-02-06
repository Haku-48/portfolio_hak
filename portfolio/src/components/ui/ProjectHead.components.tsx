/** Represent the head of a project in the folder */

interface ProjectHeadProp {
    name: string,
    onClick: () => void
}

function ProjectHead({ name, onClick }: ProjectHeadProp) {
    return (
        <div className="project_head" onClick={onClick}>
            <h3>{name}</h3>
        </div>
    )
}
export default ProjectHead;