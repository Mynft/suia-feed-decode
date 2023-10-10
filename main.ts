import {DecodeSuiaProject} from "./projects/suia";

async function main() {
  // let suiaInfo = await DecodeSuiaProject("4H8PWBZvYzSh9AspJjFvYYiSKzoWu4irHpX4vjf852jp");
  let suiaInfo = await DecodeSuiaProject("6k1Mfx9FprEA52cNbFcLx8VPk3QMjLDboHE6cr8AcSDV");
  console.log(suiaInfo);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(`error: ${JSON.stringify(error, null, 2)}, ${error.stack}`);
      process.exit(1);
    });