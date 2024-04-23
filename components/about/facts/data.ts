
import PlayingCards from "@/components/icons/PlayingCards";
import { FactType } from "@/type/types";
import { FaTableTennis } from "react-icons/fa";
import { SiDuolingo, SiMusicbrainz } from "react-icons/si";
import { TbCards } from "react-icons/tb";

export const FactData: FactType[] = [{
    id: 1,
    title: "French Scholar",
    desc: "Deconstructing grammar and mastering new vocabulary? Just another coding challenge in a different language! 🇫🇷",
    Icon: SiDuolingo
}, {
    id: 2,
    title: "Card Shark",
    desc: "Planning strategies, analyzing risks, and adapting to changing situations? Dealt with it in every hand! 🃏",
    Icon: PlayingCards
}, {
    id: 3,
    title: "Table Tennis Whiz",
    desc: "Lightning-fast reflexes, split-second decision making, and maintaining focus under pressure? All key ingredients for writing bulletproof code!",
    Icon: FaTableTennis
}]
