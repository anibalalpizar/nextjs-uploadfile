"use client";

import { useState } from "react";
import Image from "next/image";

function HomePage() {
  const [file, setfile] = useState();

  const handleFileChange = (e) => {
    setfile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      const formData = new FormData();
      formData.set("file", file);

      // send file to server
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        console.log("File uploaded");
      }
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-zinc-950 p-5">
        <h1 className="text-4xl text-center my-4">Upload a file</h1>
        <form onSubmit={handleSubmit} className="">
          <input
            type="file"
            onChange={handleFileChange}
            className="bg-zinc-900 to-zinc-100 p-2 rounded block mb-2"
          />
          <button
            type="submit"
            className="bg-green-500 to-zinc-100 p-2 rounded block w-full disabled:opacity-50"
            disabled={!file}
          >
            Upload
          </button>
        </form>
        {file && (
          <Image
            src={URL.createObjectURL(file)}
            className="w-64 h-64 object-cover mx-auto"
            width={256}
            height={256}
            alt="preview"
          />
        )}
      </div>
    </div>
  );
}

export default HomePage;
