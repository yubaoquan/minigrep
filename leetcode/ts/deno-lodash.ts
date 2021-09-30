import { add, eq } from 'https://deno.land/x/lodash@4.17.15-es/lodash.js';

const result = await add(1, 2);
console.info(eq(1, 2));
console.info(eq(1, 1));
console.info(result);

// deno run --allow-net deno-lodash.ts
