interface ButtonProps {
  text: string;
}
const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-teal-800 font-light text-xs p-1 rounded-lg">
      {text}
    </button>
  );
};

export default Button;
