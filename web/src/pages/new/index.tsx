import { Input } from "../../components/Input";
import { Submit } from "../../components/Submit";
import { useState, useEffect } from "react";
import { Textbox } from "../../components/Textbox";

import router from "next/router";

export default function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");

  useEffect(() => {
    if (
      localStorage.getItem("token") == null &&
      localStorage.getItem("user") == null
    ) {
      router.push("/login");
      //window.location.href = "/";
    }
  }, []);

  return (
    <div className="">
      <div className="bg-gray-800 rounded-md w-full p-10">
        <div className="text-2xl font-bold mb-5">New Idea</div>

        <form
          onSubmit={async (event) => {
            event.preventDefault();

            if (!title || !description || !difficulty) return;

            //let buffer = Buffer.from(`${username}:${password}`, "utf8");

            const res = await fetch("https://api.robiot.workers.dev/idea/new", {
              body: JSON.stringify({
                title: title,
                description: description,
                difficulty: difficulty,

                author: localStorage.getItem("user"),
                token: localStorage.getItem("token"),
              }),
              method: "POST",
            });

            if (res.status === 200) {
              router.push(`/idea/${await res.text()}`);
            } else {
              alert("Error when posting");
            }
          }}
          autoComplete="off"
        >
          <p className="flex flex-col gap-1">
            <label className="text-gray-200" htmlFor="username">
              Title:
            </label>
            <Input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              id="username"
            />
          </p>

          <p className="flex flex-col gap-1">
            <label className="text-gray-200" htmlFor="description">
              Description:
            </label>
            <Textbox
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              maxLength={200}
              id="description"
            />
          </p>

          <p className="flex flex-col gap-1">
            <label className="text-gray-200" htmlFor="password">
              Difficulty (1-5):
            </label>
            <Input
              value={difficulty}
              onChange={(e) => {
                if (e.target.value.length > 1) {
                  e.target.value = e.target.value.substring(0, 1);
                }
                setDifficulty(e.target.value);
              }}
              onKeyPress={(event) => {
                if (!/[1-5]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              className="mb-10"
              type="number"
              id="password"
            />
          </p>

          <Submit disabled={!title || !description || !difficulty}>
            Publish
          </Submit>
        </form>
      </div>
    </div>
  );
}
