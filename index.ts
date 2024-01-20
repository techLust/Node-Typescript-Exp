import 'dotenv/config'
import { app } from './app'
import { dbConn } from './configs/db.connection';

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {console.log(`Server running on ${PORT}`); dbConn()})