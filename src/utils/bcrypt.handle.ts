import {compare, hash} from "bcryptjs";

export const encrypt = async (password: string) =>
    await hash(password, 8);

export const verified = async (passCurrent: string, passHash: string) =>
    await compare(passCurrent, passHash);