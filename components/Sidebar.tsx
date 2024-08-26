"use client";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {sidebarLinks} from "@/constants";
import {cn} from "@/lib/utils";

const Sidebar = ({user}: SiderbarProps) => {
    const pathName = usePathname();
    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link
                    href={"/"}
                    className="flex mb-12 cursor-pointer items-center gap-2">
                    <Image
                        src={"/icons/logo.svg"}
                        alt="Bank logo"
                        className="size-[24px] max-xl:size-14"
                        width={34}
                        height={34}
                    />
                    <h1 className="sidebar-logo">ShiBuda</h1>
                </Link>
                {sidebarLinks.map((itm) => {
                    const isActive =
                        pathName === itm.route ||
                        pathName.startsWith(`${itm.route}/`);
                    return (
                        <Link
                            href={itm.route}
                            key={itm.label}
                            className={cn("sidebar-link", {
                                "bg-bank-gradient": isActive,
                            })}>
                            <div className="relative size-6">
                                <Image
                                    src={itm.imgURL}
                                    alt={itm.label}
                                    fill
                                    className={cn({
                                        "brightness-[3] invert-0": isActive,
                                    })}
                                />
                            </div>
                            <p
                                className={cn("sidebar-label", {
                                    "!text-white": isActive,
                                })}>
                                {itm.label}
                            </p>
                        </Link>
                    );
                })}
                USER
            </nav>
            FOOTER
        </section>
    );
};

export default Sidebar;
