import { NextResponse } from "next/server";

import path from "path";
import fs from "fs";

function buildPath() {
    return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath) {
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    return data;
}

export async function POST(req) {
    const { searchParams } = new URL(req.url);
    const [email, comment] = searchParams.values();
    const data = extractData(buildPath());

    // CHECK FOR DUPLICATES
    const duplicate = data.find((item) => item.email === email);
    if (duplicate) {
        return new Response(
            JSON.stringify({
                error: "Duplicate email",
            }),
            {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
    // ADD NEW ITEM
    data.push({ email, comment });

    fs.writeFileSync(buildPath(), JSON.stringify(data));
    return new Response(
        JSON.stringify({
            status: "success",
        }),
        {
            status: 200,
            headers: {
                "content-type": "application/json; charset=utf-8",
            },
        }
    );

    // return NextResponse.json({ comment, email });
}