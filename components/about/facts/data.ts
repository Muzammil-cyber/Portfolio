import { FactType } from "@/type/types";
import { FaTableTennis } from "react-icons/fa";
import { SiDuolingo, SiMusicbrainz } from "react-icons/si";

export const FactData: FactType[] = [{
    id: 1,
    title: "Learning French",
    desc: "Ready to unlock croissants, conversation, and confidence with a year of French adventures on Duolingo? Allez! 🇫🇷✨",
    Icon: SiDuolingo
}, {
    id: 2,
    title: "Love Music",
    desc: "My soundtrack to productivity? Over 41,000 minutes of Spotify - music fuels my focus and beats burnout to the punch! ⚡️",
    Icon: SiMusicbrainz
}, {
    id: 3,
    title: "Table Tennis Player",
    desc: "My ping pong prowess isn't just about reflexes - it's about strategic thinking, quick decision-making, and relentless focus, skills that translate from the table to every team challenge!",
    Icon: FaTableTennis
}]
