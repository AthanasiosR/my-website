import React from "react";
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from 'react-icons/ai';
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <BsIcons.BsPersonFill />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <RiIcons.RiLinksLine />,
    cName: "nav-text",
  },
];
