import axios from "axios";
import { NextResponse } from "next/server";

// 
export async function GET(request: Request) {

    try {
        const response = await axios.get(`https://www.rijksmuseum.nl/api/en/collection?key=${process.env.KEY_API}&technique=painting`);
        const data = response.data;
        return NextResponse.json({ data })
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        return new Response("Error al realizar la solicitud", { status: 500 });
    }
}