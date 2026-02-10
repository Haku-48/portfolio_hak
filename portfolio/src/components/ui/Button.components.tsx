// Button component for all my portfolio pages
interface ButtonProps {
  id: string;
  classname: string;
  text: string;
}

function Button({ id, classname, text }: ButtonProps) {
  return (
    <div
      className={`${classname} clickable`}
      onClick={() =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }
    >
      <p>{text}</p>
    </div>
  );
}
export default Button;
