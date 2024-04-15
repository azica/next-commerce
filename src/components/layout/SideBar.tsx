"use client"
import { ListItem, ListItemPrefix } from '@material-tailwind/react';
import Link from "next/link";

import { sideBar } from '../../shared/mockdata/mockdata';
import IconWrapper from '../ui/IconWrapper';

const SideBar = () => {
    return (
        <>
            {sideBar.map((el, idx) => (
                <ListItem key={idx}>
                    <ListItemPrefix>
                        <IconWrapper icon={el.icon} />
                    </ListItemPrefix>
                    <Link href={`/admin/${el.link}`}>
                        {el.label}
                    </Link>
                </ListItem>
            ))}
        </>
    );
}

export default SideBar;
