import fs from "fs"
 const fileName = "file.txt"

// //call back
fs.readFile(fileName, "utf8", function (err, data) {
    console.log(data);
})

//Promise (then)
fs.promises.readFile(fileName, "utf8").then((data )=> {
    console.log(data);
})

//async
const showText = async () => {
//async function showText() {
     const data = await fs.readFileSync(fileName,"utf8")
     return data
}

console.log(await showText())