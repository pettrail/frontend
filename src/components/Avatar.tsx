interface IAvatar {
  circleSize: string;
  svgSize: string;
}
function Avatar({ circleSize, svgSize }: IAvatar) {
  return (
    <div
      className={`relative ${circleSize} overflow-hidden bg-gray-200 rounded-full`}
    >
      <svg
        className={`absolute ${svgSize} text-gray-400 -left-1`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}

export default Avatar;
