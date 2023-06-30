import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([{
        message: "Type in your URL:",
        name: "URL",
    },
    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_img.png"));

        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved successfully");
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // prompt couldn't be rendered 
        } else {
            // something else went wrong 
        }
    });