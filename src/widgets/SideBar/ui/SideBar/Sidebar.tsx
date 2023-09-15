import React, { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import cls from "./Sidebar.module.scss";

export interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
         <LanguageSwitcher className={cls.lang}/>
      </div>
    </div>
  );
};

export default Sidebar;
