"use client";

import React from "react";
import { placeholderStorages } from "@/constants/index";

function CardStorage() {
  return (
    <div>
      <div className="text-light-1 flex flex-wrap mt-10 gap-5">
        {placeholderStorages.map((storage) => (
          <div key={storage.id} className="p-4 max-w-sm">
            <div className="flex rounded-xl h-full dark:bg-gray-800 bg-dark-2 p-8 flex-col">
              <div className="flex items-center mb-3">
                <h2 className="text-white dark:text-white text-lg font-medium">
                  Name: {storage.name}
                </h2>
                <div className=" ml-5 w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0"></div>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                  Storage ID: {storage.id}
                </p>
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                  Storage Size: {storage.storageSize} %
                </p>
                <a
                  /* TÄHÄN LINKKI YKSITTÄISELLE VARASTOLLE */
                  href="#"
                  /* TÄHÄN LINKKI YKSITTÄISELLE VARASTOLLE */
                  className=" text-light-2 hover:text-red-500 inline-flex items-center border-2 rounded-lg p-3 mt-5"
                >
                  More details
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardStorage;
