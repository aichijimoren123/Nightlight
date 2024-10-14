import {
  Archive,
  ArchiveX,
  CreditCard,
  File,
  Gauge,
  Inbox,
  Send,
  Settings2,
  Trash2,
  User2,
} from "lucide-react";

export const links: {
  title: string;
  label?: string;
  href?: string;
  icon: any;
  variant: "default" | "ghost";
}[] = [
  {
    title: "Dashboard",
    label: "",
    href: "/dashboard",
    icon: Gauge,
    variant: "default",
  },
  {
    title: "Users",
    label: "10",
    href: "/users",
    icon: User2,
    variant: "ghost",
  },
  {
    title:"Payments",
    label:"10",
    href:"/payments",
    icon:CreditCard,
    variant:"ghost",
  },
  {
    title: "Settings",
    label: "5",
    href: "/settings",
    icon: Settings2,
    variant: "ghost",
  },
  // {
  //   title: "Inbox",
  //   label: "128",
  //   href: "/inbox",
  //   icon: Inbox,
  //   variant: "ghost",
  // },
  // {
  //   title: "Drafts",
  //   label: "9",
  //   icon: File,
  //   variant: "ghost",
  // },
  // {
  //   title: "Sent",
  //   label: "",
  //   icon: Send,
  //   variant: "ghost",
  // },
  // {
  //   title: "Junk",
  //   label: "23",
  //   icon: ArchiveX,
  //   variant: "ghost",
  // },
  // {
  //   title: "Trash",
  //   label: "",
  //   icon: Trash2,
  //   variant: "ghost",
  // },
  // {
  //   title: "Archive",
  //   label: "",
  //   icon: Archive,
  //   variant: "ghost",
  // },
];
