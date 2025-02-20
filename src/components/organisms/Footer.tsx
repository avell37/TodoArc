import { FC } from "react"
import { Link } from "react-router-dom"
import { GithubLogo } from "../../assets/GithubLogo"
import { TelegramLogo } from "../../assets/TelegramLogo"
import { P } from "../atoms/P"

export const Footer: FC = () => {
    return (
        <footer className="relative bottom-0 w-full flex flex-col justify-end items-center pt-[10px] pb-[10px] bg-[#0D0D0D] gap-[10px]">
            <P
                text="made by avell37"
                className="text-white" />
            <div className="flex gap-[10px]">
                <Link to="https://github.com/avell37" target="_blank">
                    <GithubLogo />
                </Link>
                <Link to="https://t.me/avell37" target="_blank">
                    <TelegramLogo />
                </Link>
            </div>
        </footer>
    )
}