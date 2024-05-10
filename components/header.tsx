import { UserResource } from "@clerk/types";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
interface HeaderProps {
  user: UserResource | null | undefined;
}

const Header = ({ user }: HeaderProps) => {
  return (
    <div className="bg-slate-800 text-white shadow-lg h-[100px] flex justify-between py-5 px-5 items-center">
      <div>Logo</div>
      <div className="flex gap-2">
        <h1>Welcome</h1>
        <Link href="/profile">{user?.username}</Link>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Header;
