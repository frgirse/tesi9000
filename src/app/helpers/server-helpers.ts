
import prisma from "prisma";

const connectToData  = async () => {

        try {
            await prisma.$connect();
        }
        catch (error) {
            console.log(Error)
            throw new Error ("keine Verbindung zur Datenbank möglich!!!")
        }
}
export default connectToData