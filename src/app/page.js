"use client";

import { useState } from "react";

function HomePage() {
  const [file, setfile] = useState();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!file) return;
          console.log("uploading file");
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
