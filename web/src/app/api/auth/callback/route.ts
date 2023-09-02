import { NextRequest } from "next/server";


export async function GET(request: NextRequest) {
    const urlcheck = new URL(request.url)

    console.log(urlcheck)
}