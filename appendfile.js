const fs = require("fs")
const os = require("os")

const name = process.argv[2]

const data = `${name} ${os.EOL}`

fs.appendFile("names.txt", data, (err, data) => {
    console.log("Appended to File")
})
