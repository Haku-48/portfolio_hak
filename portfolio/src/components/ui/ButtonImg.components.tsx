// Button with image component
interface ButtonImgProps {
  img: string;
  id: string;
  classname: string;
  text: string;
}


function ButtonImg({ img, id, classname, text }: ButtonImgProps) {
    
  
    return (
    <a href={`${id}`}>
      <img src={img} alt={text}></img>
      <div className={`${classname}`}>
        <p>{text}</p>
      </div>
    </a>
  );
}
export default ButtonImg;
