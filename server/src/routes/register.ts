import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import { z } from 'zod';
import bcrypt from 'bcrypt';

const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});



const saltRounds = 10;





export async function registerRoute(app: FastifyInstance) {
    app.post('/register', async (request, reply) => {

    const { name, email, password } = createUserSchema.parse(request.body);

    try {

        // Verificar se o usuário com o mesmo e-mail já existe no banco
        const existingUser = await prisma.user.findUnique({
            where: { email: email },
        });

        if (existingUser) {
            return reply.status(409).send({ error: 'Usuario ja existente no banco com esta informação' });
        }



        // Utiliza a biblioteca do bcrypt para encriptar a senha antes de envia-la para o banco

        const criptoPass = await bcrypt.hash(password, saltRounds);


        // Se o usuário não existe, criar um novo usuário
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: criptoPass,
            },
        });

        reply.send(newUser);
    } 
    catch (error) {
        reply.status(400).send({ error: 'Erro ao salvar informações no banco, tente novamente' });
    }
    });


    app.put('/users/:id', async (request) => {
        const paramsSchemaId = z.object({
            id: z.string().uuid()
        })

        const { id } = paramsSchemaId.parse(request.params)

        const bodySchema = z.object({
            name: z.string().optional(),
            email: z.string().optional(),
            password: z.string().min(6).optional()
        })

        const { name, email, password } = bodySchema.parse(request.body);

        const user_update = await prisma.user.update({
            where: {
                id,
            },
            data: {
                name,
                email,
                password
            }
        })

        return user_update
    }) 




    // app.get('/register', async () => {
    //     const users = prisma.user.findMany()
    //     return users
    // }) 

}