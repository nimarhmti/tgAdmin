import React from "react";
import translate from "../assets/translate/translate.json";
import {
  ChartBarIcon,
  UsersIcon,
  ListBulletIcon,
  InboxIcon,
  DocumentPlusIcon,
} from "@heroicons/react/24/solid";
export interface navItemModel {
  id: string;
  label: string;
  to: string;
  icons: React.ReactNode;
}

const navItems: navItemModel[] = [
  {
    label: translate.SIDEBAR.DASHBOARD,
    id: "dashboard",
    to: "/dashboard",
    icons: <ChartBarIcon className="w-6 h-6" />,
  },
  {
    label: translate.SIDEBAR.MEMBERS,
    id: "members",
    to: "/members",
    icons: <UsersIcon className="w-6 h-6" />,
  },
  {
    label: translate.SIDEBAR.ADD_QUESTIONS,
    id: "addQuestion",
    to: "/addQuestion",
    icons: <DocumentPlusIcon className="w-6 h-6" />,
  },
  {
    label: translate.SIDEBAR.QUESTION_LIST,
    id: "questionBank",
    to: "/questionBank",
    icons: <ListBulletIcon className="w-6 h-6" />,
  },
  {
    label: translate.SIDEBAR.INBOX,
    id: "inbox",
    to: "/inbox",
    icons: <InboxIcon className="w-6 h-6" />,
  },
];

export default navItems;
