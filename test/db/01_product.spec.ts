import { expect, test } from "../../fixture/base";
import { db } from "../../utils/db";

test('Validate all products', async () =>{
    const [products] = await db.query('SELECT * FROM productos')
    expect(products).toBeDefined()
})