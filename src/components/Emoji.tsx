import { ImageProps, Image } from "@chakra-ui/react";
import meh from "../assets/meh.png";
import target from "../assets/target.png";
import thumbUp from "../assets/thumb-up.png";

interface Props {
  rating: number;
}

function Emoji({ rating }: Props) {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbUp, alt: "recommend", boxSize: "25px" },
    5: { src: target, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} />;
}

export default Emoji;
