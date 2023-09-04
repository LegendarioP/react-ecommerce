import fastify from 'fastify'
import cors from '@fastify/cors'
import { registerRoute } from './routes/register'
import { loginRoute } from './routes/login'
// import { authRoutes } from './routes/auth'



const app = fastify()




app.register(cors, {
    origin: true,
})

// app.register(authRoutes)
app.register(registerRoute)
app.register(loginRoute)





app.listen({
    port: 3333,
}).then(() => {
    console.log(" SERVIDOR RODANDO NAQUELE LUGAR 😩")
})