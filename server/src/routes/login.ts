import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import { z } from 'zod';
import bcrypt from 'bcrypt';

const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});


const saltRounds = 10;

export async function loginRoute(app: FastifyInstance) {
    app.post('/login', async (request, reply) => {

    const { email, password } = createUserSchema.parse(request.body);

        console.log(email)

    try {

        // Verificar se o usuário com o mesmo e-mail já existe no banco
        const existingUser = await prisma.user.findUnique({
            where: { email: email },
        });

        if (!existingUser) {
            return reply.status(404).send({ error: 'Usuario não encontrado no banco' });
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);


        if (!passwordMatch) {
            return reply.status(401).send({ error: 'Senha incorreta' });
        }

        reply.send(existingUser);


        

    } 
    catch (error) {
        reply.status(400).send({ error: 'Erro ao salvar informações no banco, tente novamente' });
    }
    });


    // app.put('/login/:id', async (request) => {
    //     const paramsSchemaId = z.object({
    //         id: z.string().uuid()
    //     })

    //     const { id } = paramsSchemaId.parse(request.params)

    //     const bodySchema = z.object({
    //         name: z.string().optional(),
    //         email: z.string().optional(),
    //         password: z.string().min(6).optional()
    //     })

    //     const { name, email, password } = bodySchema.parse(request.body);

    //     const user_update = await prisma.user.update({
    //         where: {
    //             id,
    //         },
    //         data: {
    //             name,
    //             email,
    //             password
    //         }
    //     })

    //     return user_update
    // }) 




    app.get('/login', async () => {
        const users = prisma.user.findMany()
        return users
    }) 

}