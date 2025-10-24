import { expect, test } from "../base";
import { db } from "../utils/dt";

test('Validate all users in db', async () =>{

    const [usuarios] =  await db.query('SELECT * FROM usuarios');
    expect(usuarios).toBeDefined()

 });

test('Validate user for name', async () =>{
    const [nombre] = await db.query('SELECT nombre FROM usuarios')
    expect(nombre).toBeDefined()
})

test('Validate user for id', async () =>{
    const [id] = await db.query('SELECT * FROM usuarios WHERE id = "1"');
    expect(id).toBeDefined()
})