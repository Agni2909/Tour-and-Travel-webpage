import React from 'react';
import {House,Info,Briefcase,AddressBook} from 'phosphor-react';
export const MenuItems=[
    {
        title:"Home",
        url:"/",
        cName:"nav-links",
        icon:House
    },
    {
        title:"About",
        url:"/about",
        cName:"nav-links",
        icon:Info
    },
    {
        title:"Service",
        url:"/service",
        cName:"nav-links",
        icon:Briefcase
    },
    {
        title:"Contact",
        url:"/contact",
        cName:"nav-links",
        icon:AddressBook
    },
    {
        title:"Sign Up",
        url:"/signup",
        cName:"nav-links-mobile",
    },
]