import router from "next/router";
import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import queryString from "query-string";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

type T_ideaData = {
  author: string;
  description: string;
  difficulty: string;
  title: string;
  voters: string[];
};

export default function Idea() {
  const [ideaData, setIdeaData] = useState<T_ideaData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getData(rid) {
      const res = await fetch("https://api.robiot.workers.dev/idea/get", {
        body: rid,
        method: "POST",
      });
      if (!res.ok) router.push("/");
      setIdeaData(JSON.parse(await res.json()));
      setLoading(false);
    }
    const parsedQuery = queryString.parse(location.search);
    if (parsedQuery.id == null) {
      router.push("/");
    } else {
      getData(parsedQuery.id);
    }
  }, []);

  return (
    <div className="bg-gray-800 rounded-md p-6">
      {loading ? (
        <PulseLoader color="#FFFFFF" loading={loading} size={10} />
      ) : (
        <div className="flex">
          <div className="-mt-1 flex-col justify-center items-center">
            <div>
              <button
                onClick={async () => {
                  const author = localStorage.getItem("user");
                  const token = localStorage.getItem("token");
                  if (author === null || token === null) {
                    router.push("/login");
                  }

                  await fetch("https://api.robiot.workers.dev/idea/vote", {
                    body: JSON.stringify({
                      author: author,
                      token: token,
                      id: queryString.parse(location.search).id,
                      type: "+",
                    }),
                    method: "POST",
                  });
                  router.reload();
                }}
              >
                <ExpandLessIcon fontSize="large" />
              </button>
            </div>
            <div className="text-center">{ideaData.voters.length}</div>
            <div>
              <button
                onClick={async () => {
                  const author = localStorage.getItem("user");
                  const token = localStorage.getItem("token");
                  if (author === null || token === null) {
                    router.push("/login");
                  }

                  await fetch("https://api.robiot.workers.dev/idea/vote", {
                    body: JSON.stringify({
                      author: author,
                      token: token,
                      id: queryString.parse(location.search).id,
                      type: "-",
                    }),
                    method: "POST",
                  });
                  router.reload();
                }}
              >
                <ExpandMoreIcon fontSize="large" />
              </button>
            </div>
          </div>

          <div className="ml-10">
            <div className="flex-col items-center justify-center">
              <div className="text-white font-bold text-3xl mb-0">
                {ideaData.title}
              </div>

              <div className="text-gray-400">
                By{" "}
                <span className="font-semibold text-lg">{ideaData.author}</span>
              </div>
            </div>
          </div>
          <div />
        </div>
      )}
    </div>
  );
}
