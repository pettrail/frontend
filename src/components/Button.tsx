import { Link } from "react-router-dom";

interface IButton {
  color: string;
  text: string;
  width?: string;
  link?: string;
  shadow?: string;
  py?: string;
  fontSize?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({
  color,
  text,
  width,
  link,
  py,
  fontSize,
  onClick = () => {},
}: IButton) {
  return (
    <>
      {link ? (
        <Link
          to={link}
          className={`block flex justify-center ${color} ${
            width ? width : ""
          } text-white font-medium rounded-md ${
            fontSize ? fontSize : "text-xs"
          } ${
            py ? py : "py-2"
          } hover:bg-primary transition ease-in duration-200`}
        >
          {text}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`${color} ${
            width ? width : ""
          } text-white font-medium rounded-md z-50 ${
            fontSize ? fontSize : "text-xs"
          } ${
            py ? py : "py-2"
          } hover:bg-primary transition ease-in duration-200`}
        >
          {text}
        </button>
      )}
    </>
  );
}

export default Button;
