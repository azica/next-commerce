"use client"
import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import { ChevronDown } from 'akar-icons';
import Link from 'next/link';
import { signOut } from "next-auth/react"

import { profileMenuItems } from '@/shared/mockdata/mockdata';

import IconWrapper from '../ui/IconWrapper';

const ProfileMenu = ({ user, isMenuOpen, setIsMenuOpen }: { user: Model.User; isMenuOpen: boolean; setIsMenuOpen: (val: boolean) => void }) => {
    return (
        <Menu
            placement="right-start"
            offset={15}
            allowHover>
            <MenuHandler>
                <div className="flex gap-1 items-center">
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt={user.name}
                        src={user.avatar}
                    />
                    <ChevronDown
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        strokeWidth={1.5}
                        className={`h-3 w-3 transition-transform cursor-pointer ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </div>
            </MenuHandler>
            <MenuList >
                {profileMenuItems.map(({ label, icon, link }, key) => (
                    <MenuItem key={key}>
                        {link ?
                            <Link href={link === "dashboard" ? link : `/customer/${link}`} className="flex gap-2 items-center">
                                <IconWrapper icon={icon} />
                                {label}
                            </Link>
                            : <Button variant="filled" onClick={() => signOut({ callbackUrl: "/" })} fullWidth>{label}</Button>
                        }
                    </MenuItem>
                ))
                }
            </MenuList >
        </Menu>
    )
}

export default ProfileMenu