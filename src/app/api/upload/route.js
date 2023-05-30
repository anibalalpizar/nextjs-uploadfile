import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request) {
  // get file from request
  const data = await request.formData();
  const file = data.get("file");

  // get file bytes
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // save file to disk
  const filePath = path.join(process.cwd(), "public", file.name);
  writeFile(filePath, buffer);
  console.log(`File saved to ${filePath}`);

  return new Response(JSON.stringify({ message: "Uploaded file" }));
}
