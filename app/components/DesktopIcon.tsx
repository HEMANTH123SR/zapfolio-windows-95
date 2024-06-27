import Image from "next/image";

export const DesktopIcon = ({
    imageSrc,
    title,
    imgClass = "",
    isSmall = false,
    containerClass = "",
    handleClick = () => { }
}: {
    imageSrc: string;
    title: string;
    imgClass?: string;
    isSmall?: boolean;
    containerClass?: string;
    handleClick?: () => void;
}) => {
    const iconSize = isSmall ? 32 : 36;
    return (
        <div className="flex" onClick={() => handleClick()}>
            <div
                className={`flex  items-center  cursor-pointer space-x-2.5  ${containerClass}`}
            >
                <Image src={imageSrc} width={iconSize} height={iconSize} alt={title} className={imgClass} />
                <span className="text-sm capitalize">{title}</span>
            </div>
        </div>
    );
};
