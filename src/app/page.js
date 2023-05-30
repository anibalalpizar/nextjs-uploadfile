"use client";

import { useState } from "react";

function HomePage() {
  const [file, setfile] = useState();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (!file) return;

          const formData = new FormData();
          formData.set("file", file);

          // send file to server
          const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          });
          const data = await res.json();
          console.log(data);
        }}
      >
        <label>Upload file:</label>
        <input
          type="file"
          onChange={(e) => {
            setfile(e.target.files[0]);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
