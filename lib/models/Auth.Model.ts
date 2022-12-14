import mongoose, { Date, Model, Types, VirtualType } from "mongoose";
import bcrypt from 'bcrypt'
import createModel from "../createModel";
export interface AuthModel extends mongoose.Document {
    id: Types.ObjectId
    username?: string;
    password: string;
    email?: string;
    firstname: string;
    lastname: string;
    sex?: string;
    bithday?: Date,
    created_at: Date,
    updated_at: Date
}

export interface User {
    email: string,
    username: string
    password: string,
}
interface AuthMethods {
    fullName(): string;
}

export type _AuthModel = Model<AuthModel, {}, AuthMethods>;

const UserSchema: mongoose.Schema<AuthModel, _AuthModel, AuthMethods> = new mongoose.Schema<AuthModel, _AuthModel, AuthMethods>({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        /**validate: {
                    validator: (v: string) => {
                        let rgx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
                        return !v || !v.trim().length || rgx.test(v)
                    },
                    message: 'password should contain atleast one number and one special character',
        
                }, */
    },
    email: {
        index: true,
        unique: true,
        type: String,
        required: true,
        validate: {
            validator: (v: string) => {
                let rgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return !v || !v.trim().length || rgx.test(v)
            },
            message: 'Email is not match'
        }
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: false

    },
    bithday: {
        type: "Date",
        required: false
    },
    created_at: {
        type: Date,
        default: Date
    },
    updated_at: {
        type: Date,
        default: Date
    }
})

UserSchema.method("fullName", function fullName() {
    return this.firstname + " " + this.lastname;
});

export const UserModel = createModel<AuthModel, _AuthModel>('users', UserSchema) 
