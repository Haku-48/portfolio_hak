// Flag for Skills and Projects
interface FlagProps {
  flagType?: string;
}

function Flag({ flagType }: FlagProps) {
  return <div className={`flag ${flagType}`}>{flagType}</div>;
}

export default Flag;
