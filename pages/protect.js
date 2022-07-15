// pages/index.js
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function Protect() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.sub}!{console.log(user)}
        <Link href="/api/auth/logout">Logout</Link>
      </div>
    );
  }

  return <Link href="/api/auth/login">Login</Link>;
}
