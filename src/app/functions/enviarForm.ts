import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function adicionar_dados(nome: any, id: any){

    const pessoa = await prisma.usuario.create(
        {
            data:{
                id: id,
                name: nome, 
            }
        }
    )
}
