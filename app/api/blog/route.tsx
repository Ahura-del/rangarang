import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
export async function GET() {
  try {
    // Construct the full path to the JSON file
    const filePath = path.join(process.cwd(), "public", "Data", "blog.json");

    // Read the file's contents
    const fileContents = fs.readFileSync(filePath, "utf8");

    // const data = await response.json();;
    const data = JSON.parse(fileContents);
    return NextResponse.json({ data },{status:200});
  } catch (error) {

    return NextResponse.json({ error } , {status:500});
  }
}
