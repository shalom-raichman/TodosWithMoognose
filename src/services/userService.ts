import User from "../modeles/interfases/IUser"
import { UserModel } from "../modeles/schemas/userSchema"

export const createUser = async (user: User): Promise<void> => {
    try {
        const dbUsur = new UserModel({ user_name: user.user_name })
        await dbUsur.save()
    } catch (err) {
        console.log(err)
    }
}