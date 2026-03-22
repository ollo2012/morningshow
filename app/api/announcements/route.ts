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
    const { title, text, date, importance } = await req.json();
    ensureFile();

    const announcements = JSON.parse(fs.readFileSync(filePath, "utf8"));
    
    const newEntry = {
      id: Date.now().toString(),
      title,
      text,
      date,
      author: session.user?.name || "Unknown",
      importance: !!importance
    };

    announcements.push(newEntry);
    fs.writeFileSync(filePath, JSON.stringify(announcements, null, 2));

    return NextResponse.json(newEntry);
  } catch (error) {
    console.error("Failed to save announcement:", error);
    return NextResponse.json({ error: "Save failed" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    ensureFile();
    const fileData = fs.readFileSync(filePath, "utf8");
    let announcements = JSON.parse(fileData);

    const exists = announcements.find((item: any) => item.id === id);
    if (!exists) {
      return NextResponse.json({ error: "Announcement not found" }, { status: 404 });
    }

    const filteredAnnouncements = announcements.filter((item: any) => item.id !== id);

    fs.writeFileSync(filePath, JSON.stringify(filteredAnnouncements, null, 2));

    return NextResponse.json({ message: "Announcement deleted" });
  } catch (error) {
    console.error("Failed to delete announcement:", error);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}