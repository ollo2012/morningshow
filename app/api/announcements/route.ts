import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth"; 
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data/announcements.json");

// Helper to ensure directory and file exist
const ensureFile = () => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
};

// ADD THIS: This handles the "Refresh" or page load
export async function GET() {
  try {
    ensureFile();
    const fileData = fs.readFileSync(filePath, "utf8");
    const announcements = JSON.parse(fileData);
    return NextResponse.json(announcements);
  } catch (error) {
    console.error("Failed to read announcements:", error);
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { title, text, date } = await req.json();
    ensureFile();

    const announcements = JSON.parse(fs.readFileSync(filePath, "utf8"));
    
    const newEntry = {
      id: Date.now().toString(),
      title,
      text,
      date,
      author: session.user?.name || "Unknown"
    };

    announcements.push(newEntry);
    fs.writeFileSync(filePath, JSON.stringify(announcements, null, 2));

    return NextResponse.json(newEntry);
  } catch (error) {
    console.error("Failed to save announcement:", error);
    return NextResponse.json({ error: "Save failed" }, { status: 500 });
  }
}