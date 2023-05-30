import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(request) {
  try {
    // throw new Error("test");
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
  } catch (e) {
    return NextResponse.json({ message: "no file" }, { status: 400 });
  }
}
