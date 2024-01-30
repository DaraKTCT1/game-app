import { Image, ImageProps } from "@chakra-ui/react";
const like = "https://github.com/DaraKTCT1/image/blob/main/like.png?raw=true"
const reallylike = "https://github.com/DaraKTCT1/image/blob/main/reallylike.png?raw=true"
const unlike = "../assets/unlike.webp"

interface PropType{
    rating: number;
}
const Emoji = ({rating}: PropType) => {
    if(rating<3) return null;
    const emojiMap: {[key: number]: ImageProps} = {
        3: { src: unlike,alt: "unlike",boxSize: "30px"},
        4: { src: like,alt: "like",boxSize: "30px"},
        5: { src: reallylike,alt: "reallylike",boxSize: "30px"},
    }
  return (
    <Image {...emojiMap[rating] } marginTop={1} />
  )
}

export default Emoji