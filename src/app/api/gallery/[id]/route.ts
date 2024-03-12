import axios from "axios";
import { NextResponse } from "next/server";
import { ArtObject } from '@/Interfaces/ArtObject';

interface Segments {
    params: {
        id: string;
    }
}

// 
export async function GET(request: Request, { params }: Segments ) {
    const { id } = params;

    try {
        const response = await axios.get(`https://www.rijksmuseum.nl/api/en/collection/${id}?key=${process.env.KEY_API}`);
        const { artObject } = response.data;
        return NextResponse.json({ artObject })
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        return new Response("Error al realizar la solicitud", { status: 500 });
    }
}