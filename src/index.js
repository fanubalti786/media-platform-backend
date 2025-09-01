import dotenv from "dotenv"
dotenv.config()
import {connectDB} from "./db/db.config.js"

connectDB()

// ( async () => {
//     try {
//        await mongoose.connect(process.env.MONGODB_URL);
//         app.on("error", (error) => {
//             console.log("ERROR: ", error);
            
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port: ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.log("ERROR", error)
//     }
// })()