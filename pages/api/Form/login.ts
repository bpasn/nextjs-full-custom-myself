// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
export interface Data {
    name?: string,
    result: any
}
let MONGODB_URI = process.env.MONGOOSE_URI || ''
export default async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    try {
        if (req.method === "POST") {
            console.log(req.body)
            res.send("LOGIN WITH METHOD::"+req.method)
        }
        if(req.method === "GET"){
            res.send("LOGIN WITH METHOD::"+req.method)
        }
    } catch (error) {
        res.status(500).json({
            result: error instanceof Error && error.message,
        })
    }
}
