import {DecodeSuiaProject, SuiaExample} from "./projects/suia";

async function main() {
  await SuiaExample();
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(`error: ${JSON.stringify(error, null, 2)}, ${error.stack}`);
      process.exit(1);
    });