import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
    {
        name: 'URL',
        message: 'Type in your URL: ',
    },
]).then((answer) => {
    var qr_png = qr.image(answer.URL, {type: 'png'});
    qr_png.pipe(fs.createWriteStream('output.png'));
});