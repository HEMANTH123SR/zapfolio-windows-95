import Image from "next/image";
export const Tabs = ({
  imgSrc,
  handleAction = () => {},
}: {
  imgSrc: string;
  handleAction: () => void;
}) => {
  return (
    <div
      className="p-1.5 bg-[#C0C0C0]"
      style={{ boxShadow: "0.5px 0.5px #000000" }}
      onClick={() => handleAction()}
    >
      <Image src={imgSrc} alt="window tab" width={6} height={6} />
    </div>
  );
};


