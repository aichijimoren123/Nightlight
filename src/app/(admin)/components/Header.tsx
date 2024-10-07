import { HeaderNavigation } from "./HeaderNavigation";
import { Search } from "./Search";
import TeamSwitcher from "./TeamSwitch";
import { UserNav } from "./UserDropdownMenu";

export default function Header({ className }: { className?: string }) {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <TeamSwitcher />
        <HeaderNavigation className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
    </div>
  );
}
