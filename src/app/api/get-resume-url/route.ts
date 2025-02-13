import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

import { env } from "@/lib/env";

const S3 = new S3Client({
  region: "auto",
  endpoint: `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: env.R2_ACCESS_KEY_ID,
    secretAccessKey: env.R2_SECRET_ACCESS_KEY,
  },
});

export async function POST(request: Request) {
  try {
    const { key } = await request.json();

    const command = new GetObjectCommand({
      Bucket: env.R2_BUCKET_NAME,
      Key: key,
    });

    const { Body, ContentType } = await S3.send(command);
    const buffer = await Body?.transformToByteArray();

    if (!buffer) {
      throw new Error("Failed to get file");
    }

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": ContentType || "application/pdf",
        "Content-Disposition": "attachment",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
  catch (error) {
    console.error("download failed:", error);
    return NextResponse.json({ error: "download failed" }, { status: 500 });
  }
}
