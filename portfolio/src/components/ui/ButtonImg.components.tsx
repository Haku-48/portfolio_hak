// Button with image component

interface ButtonImgProps {
  Img: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  id: string;
  classname: string;
  text: string;
  onSite: boolean;
}

function ButtonImg({ Img, id, classname, text, onSite }: ButtonImgProps) {

  return (
    <div className="button_img nav_button">
      {!onSite ? (
        <a href={`${id}`}>
          <Img />

          <div className={`${classname}`}>
            <p>{text}</p>
          </div>
        </a>
      ) : (
        <div
          className="clickable"
          onClick={() =>
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <Img />
          <div className={`${classname}`}>
            <p>{text}</p>
          </div>{" "}
        </div>
      )}
    </div>
  );
}
export default ButtonImg;
