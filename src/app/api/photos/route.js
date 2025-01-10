import fs from "fs";
import path from "path";

export async function GET(request) {
  const dirPath = path.resolve("./public/photos");
  const files = fs.readdirSync(dirPath);
  const photos = files.map((file, index) => ({
    id: index + 1,
    title: path.parse(file).name,
    url: `/photos/${file}`,
  }));
  return new Response(JSON.stringify(photos), {
    headers: { "Content-Type": "application/json" },
  });
}
