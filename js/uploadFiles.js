const { ThirdwebStorage } = require("@thirdweb-dev/storage");
const fs = require("fs");

const storage = new ThirdwebStorage();

(async () => {
  const upload = await storage.upload(fs.readFileSync());
  console.log(`Gateway URL - ${storage.resolveScheme(upload)}`);
})();

