import { api } from "@/lib/api";
import { NextRequest } from "next/server";


export async function GET(request: NextRequest) {
    //const urlcheck = new URL(request.url)

    
    const registerResponse = await api.post('/auth', {
        


    }) 


}