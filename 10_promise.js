/**
 * Créez une fonction asynchrone qui attend 2 seconde
 *
 * utilisez new Promise
 */

const sleep = () => new Promise((resolve) => setTimeout(resolve, 2000));

const testSleep = async () => {
  console.log("Start:", new Date().toISOString());
  await sleep();
  console.log("End:", new Date().toISOString());
};

testSleep();

module.exports = { sleep };
