// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose, { connect } from 'mongoose'
import { _AuthModel, UserModel, AuthModel } from '../../lib/models/Auth.Model'
export interface Data {
  name?: string,
  result: any
}
let MONGODB_URI = process.env.MONGOOSE_URI || ''
export default async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    mongoose.set("strictQuery", true)
    await connect(MONGODB_URI)
    const _user = await UserModel.findOne()
    res.status(200).json({
      result: _user,
    })
  } catch (error) {
    res.status(500).json({
      result: error instanceof Error && error.message,
    })
  }
}
