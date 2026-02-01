// Button component for all my portfolio pages
interface ButtonProps {
  id: string;
  classname: string;
  text: string;
}

function Button({ id, classname, text }: ButtonProps) {
  return (
    <a href={`${id}`}>
      <div className={`${classname}`}>
        <p>{text}</p>
      </div>
    </a>
  );
}
export default Button;
