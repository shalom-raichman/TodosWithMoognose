import exp, { Express } from "express"
import cookieParser from "cookie-parser"
import userRouter from "./routes/userRouter"
import "dotenv/config"

const PORT = process.env.PORT || 1415

const app: Express = exp()

app.use(exp.json())
app.use(cookieParser())

app.use("/user", userRouter)

app.listen(PORT, (): void => console.log(`Server is up runing on http://localhost:${PORT}`))