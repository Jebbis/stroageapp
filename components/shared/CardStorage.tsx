import React from "react";

import { Button } from "../ui/button";

const getStorage = async () => {
  console.log("getStorage start");
  try {
    const res = await fetch("http://127.0.0.1:3000/api/storages", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function CardStorage() {
  const { storages } = await getStorage();
  return (
    <div>
      <div className="text-light-1 flex flex-wrap mt-10 gap-5">
        {storages.map((storage) => (
          <div key={storage._id} className="p-4 max-w-sm">
            <div className="flex rounded-xl h-full dark:bg-gray-800 bg-dark-2 p-8 flex-col">
              <div className="flex items-center mb-3">
                <h2 className="text-white dark:text-white text-lg font-medium">
                  Storage ID: {storage.asiakas}
                </h2>
                <div className=" ml-5 w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0"></div>
              </div>
              {storage.varastot.map((t) => (
                <div className="flex flex-col justify-between flex-grow">
                  <p className="leading-relaxed text-base text-white dark:text-gray-300">
                    Name: {t.nimi}
                  </p>
                  <p className="leading-relaxed text-base text-white dark:text-gray-300">
                    Storage Size: {t.varastonkoko} %
                  </p>
                  <Button size="sm" className="community-card_btn mt-5">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
