import { Menu } from "lucide-react";
import messageIcon from "../assets/icons/tabler_message.svg"

export default function Navbar() {
    return (
        <nav className="w-full px-6 py-4 bg-white flex justify-between items-center max-lg:px-[20px]">
            <h1 className="text-[24px] text-primary font-instrument font-bold max-md:text-[18px]">
                SolanaTravels
            </h1>

            <ul className="flex gap-[40px] text-[16px] text-secondary font-semibold font-instrument max-lg:gap-4 max-md:gap-3 max-md:text-[14px] max-md:hidden">
                <li className="flex items-center font-semibold ">
                    <div className="flex items-center gap-2 font-semibold cursor-pointer">
                        <span className="text-[16px] font-semibold text-secondary max-md:text-[14px]">USD</span>

                        <img
                            src="https://flagcdn.com/w40/gb.png"
                            alt="UK Flag"
                            className="w-6 h-4 object-cover rounded-sm"
                        />
                    </div>
                </li>
                <li className="text-secondary cursor-pointer">Support</li>
                <li className="text-secondary cursor-pointer">Trips</li>
                <li>
                <img className="" src={messageIcon} alt="message" />
                </li>
                <li className="text-secondary cursor-pointer">Sign in</li>
            </ul>
            <div className=" hidden max-md:block relative">
                <button><Menu /></button>
                <div className=" absolute right-0 bg-white hidden">
                    <ul className="flex gap-[40px] w-[260px] rounded-2xl border border-secondary p-[16px] text-[16px] items-end text-secondary font-semibold font-instrument flex-col max-lg:gap-4 max-md:gap-3 max-md:text-[14px] ">
                <li className="flex items-center font-semibold ">
                    <div className="flex items-center gap-2 font-semibold cursor-pointer">
                        <span className="text-[16px] font-semibold text-secondary max-md:text-[14px]">USD</span>

                        <img
                            src="https://flagcdn.com/w40/gb.png"
                            alt="UK Flag"
                            className="w-6 h-4 object-cover rounded-sm"
                        />
                    </div>
                </li>
                <li className="text-secondary cursor-pointer">Support</li>
                <li className="text-secondary cursor-pointer">Trips</li>
                <li>
                <img className="" src={messageIcon} alt="message" />
                </li>
                <li className="text-secondary cursor-pointer">Sign in</li>
            </ul>
                </div>
            </div>
        </nav>
    );
}