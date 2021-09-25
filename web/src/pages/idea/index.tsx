import router from "next/router";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import queryString from "query-string";
import MaterialIcon, { colorPalette } from "material-icons-react";

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
  const crouter = useRouter();

  useEffect(() => {
    async function getData(rid) {
      const res = await fetch("https://api.robiot.workers.dev/idea/get", {
        body: rid,
        method: "POST",
      });
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
        <div>
          <div className="flex justify-center">
            <div className="flex justify-center">
              <div className="flex-col text-center">
                <div className="text-white font-bold text-3xl mb-0">
                  {ideaData.title}
                </div>

                <div className="text-gray-400 ml-4">
                  By{" "}
                  <span className="font-semibold text-lg">
                    {ideaData.author}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
