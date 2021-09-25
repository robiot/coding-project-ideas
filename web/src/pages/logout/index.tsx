import router from "next/router";
import { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    localStorage.clear();
    router.back();
  }, []);

  return <div>Logging out</div>;
}
