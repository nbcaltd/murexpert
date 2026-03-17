import { NextResponse } from "next/server";
import keywordData from "@/data/keywords.json";

export async function GET() {
  return NextResponse.json(keywordData);
}
