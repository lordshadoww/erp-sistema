import argon2 from "argon2";

const password = "123456";

const hash = await argon2.hash(password);

console.log("HASH:");
console.log(hash);

