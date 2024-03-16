import axios from "axios";
import { NextResponse } from "next/server";

// let request = require('superagent');

var clientID = 'bd1222ec4022f8b5a89d',
    clientSecret = '481a1c0dbd6a1eec9d18b8c8e2810115',
    apiUrl = 'https://api.artsy.net/api/tokens/xapp_token',
    xappToken:any;



export async function POST() {
    try {
        const res = axios.post(apiUrl, {
            client_id: clientID,
            client_secret: clientSecret
        });
        xappToken = (await res).data.token;
        return NextResponse.json({ xappToken })
    } catch (error) {
        return new Response("Error al realizar la solicitud", { status: 500 });
    }
}