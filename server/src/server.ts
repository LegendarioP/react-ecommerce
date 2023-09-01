import fastify from 'fastify'
import cors from '@fastify/cors'
import { usersRoutes } from './routes/register'
import { authRoutes } from './routes/auth'



const app = fastify()




app.register(cors, {
    origin: true,
})

app.register(authRoutes)
app.register(usersRoutes)






app.listen({
    port: 3333,
}).then(() => {
    console.log(" SERVIDOR RODANDO NAQUELE LUGAR 😩")
})