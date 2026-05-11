import type { ReactNode } from "react";

import NotFoundPage from "../pages/NotFoundPage";


type Props = {
  children: ReactNode;
};

export default function UserAuth({ children }: Props) {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") || "null"
  );

  const Isadmin = currentUser.name === "sathrak" && currentUser.email === "admin@gmail.com"
  
  if (!Isadmin) {
    return <NotFoundPage/>;
  }

  return <>{children}</>;
}