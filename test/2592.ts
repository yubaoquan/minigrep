const find = () => {
  let found = false;
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      for (let k = 1; k < 10; k++) {
        for (let m = 1; m < 10; m++) {
          const num = i * 1000 + j * 100 + k * 10 + m;
          if (i ** j * k ** m === num) {
            console.info('found', i, j, k, m);
            found = true;
          }
        }
      }
    }
  }
  if (!found) console.info(`not found`);
};

find();
