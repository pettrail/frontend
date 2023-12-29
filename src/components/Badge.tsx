interface IBadge {
  label: string;
  bgColor: string;
  textColor: string;
}
function Badge({ label, bgColor, textColor }: IBadge) {
  return (
    <span
      className={`w-fit ${bgColor} ${textColor} text-[0.6rem] font-medium me-2 px-2 py-0.5 rounded-full mobile:py-1`}
    >
      {label}
    </span>
  );
}

export default Badge;
