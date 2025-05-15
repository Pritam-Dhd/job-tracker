import { Layers, AppWindow, AreaChart } from "lucide-react";

type Navlink = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

const links: Array<Navlink> = [
  {
    href: "/add-job",
    label: "Add Job",
    icon: <Layers />,
  },
  {
    href: "/jobs",
    label: "Jobs",
    icon: <AppWindow />,
  },
  {
    href: "/stats",
    label: "Stats",
    icon: <AreaChart />,
  },
];

export default links;
