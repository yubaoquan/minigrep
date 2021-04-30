import cloneDeep from 'https://cdn.deno.land/denodash/versions/v0.1.3/raw/src/lang/cloneDeep.ts';

const srcObj = {
  a: {
    b: {
      val: 123,
    },
  },
};

const destObj = cloneDeep(srcObj);

srcObj.a.b.val = 456;
console.info(srcObj);
console.info(destObj);
