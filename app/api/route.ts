import { NextResponse } from "next/server";
import blogData from '../../public/Data/blog.json'
export  function GET() {
  try {
    const data = JSON.parse(JSON.stringify(blogData));
    return NextResponse.json({ data },{status:200});
  } catch (error) {

    return NextResponse.json({ error } , {status:500});
  }
}
