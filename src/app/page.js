"use client";

import { useState } from "react";

function HomePage() {
  const [file, setfile] = useState();

  const handleFileChange = (e) => {
    setfile(e.target.files[0]);
  };

  return (
    <div>
      <form
        onSubmit={async (e) => {
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
        }}
      >
        <label>Upload file:</label>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
