import Image from "next/image";
import duck from "../../public/images/DuckNoBg.png";

export default function Logo(props: { width?: number, height?: number, className?: string }) {
    return (
        <Image src={duck} alt="A duck logo" className={props.className} width={props.width} height={props.height}  />
    )
}