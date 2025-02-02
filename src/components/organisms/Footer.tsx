import { GithubLogo } from "../../assets/GithubLogo"
import { TelegramLogo } from "../../assets/TelegramLogo"
import { P } from "../atoms/P"

export const Footer: React.FC = () => {
    return (
        <div className="flex flex-col justify-end items-center pt-[10px] pb-[10px] bg-[#0D0D0D] gap-[10px]">
            <P
                text="made by avell37"
                className="text-white" />
            <div className="flex gap-[10px]">
                <GithubLogo />
                <TelegramLogo />
            </div>
        </div>
    )
}