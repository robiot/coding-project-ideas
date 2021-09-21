import { Input } from "../../components/Input";
import { Submit } from "../../components/Submit";
import { useState, useEffect } from "react";
import router from "next/router";
import useLocalStorage from "../../utils/useLocalStorage";

type LoginResponse =
  | { status: "success"; token: string }
  | { status: "fail"; message: string };

export default function Login() {
  const [status, setStatus] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useLocalStorage("token", "");

  useEffect(() => {
    if (token) {
      router.push("/");
      //window.location.href = "/";
    }
  }, [token]);

  return (
    <div className="flex items-center justify-center h-screen -mt-16">
      <div className="bg-gray-800 rounded-md w-full p-10 mx-0 md:mx-40">
        <div className="text-2xl font-bold mb-5">Welcome</div>

        <form
          onSubmit={async (event) => {
            event.preventDefault();

            if (!username || !password) return;

            let buffer = Buffer.from(`${username}:${password}`, "utf8");
            let base64 = buffer.toString("base64");

            const res = await fetch(
              "https://api.robiot.workers.dev/user/login",
              {
                body: base64,
                method: "POST",
              }
            );

            const result = (await res.json()) as LoginResponse;

            if (result.status === "success") {
              setToken(result.token);
              localStorage.setItem("user", username);
            } else {
              setStatus(result.message);
            }
          }}
          autoComplete="off"
        >
          <p className="flex flex-col gap-1">
            <label className="text-gray-200" htmlFor="username">
              Username:
            </label>
            <Input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setStatus("");
              }}
              id="username"
            />
          </p>
          <p className="flex flex-col gap-1">
            <label className="text-gray-200" htmlFor="password">
              Password:
            </label>
            <Input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setStatus("");
              }}
              className="mb-10"
              type="password"
              id="password"
            />
          </p>
          <Submit disabled={!username || !password}>Login</Submit>
          {status ? (
            <div className="mt-4 text-center text-red-500">{status}</div>
          ) : null}
        </form>
      </div>
    </div>
  );
}
