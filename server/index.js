const fs = require("fs");
const pdf = require("pdf-parse");

const pdfFile = fs.readFileSync("avez.pdf");

pdf(pdfFile).then(function (data) {
    const skillsIndex = data.text.indexOf("SKILLS");
    const nextSectionIndex = data.text.indexOf("EXPERIENCE", skillsIndex);

    const skillsSection = data.text.substring(skillsIndex, nextSectionIndex);

    console.log(skillsSection);
});
