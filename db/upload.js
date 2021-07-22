//JS does not allows access to local files for security reasons

console.log("from upload.js")

// const cloudinary = require('cloudinary').v2

// cloudinary.config({
//     cloud_name: "dhsiicpyj",
//     api_key: "511866658577527",
//     api_secret: "RKlKLolO60IfALf41Tgq7JY91nQ"
// })

const file = require("/Users/carloshehe/Desktop/jen.jpg")

const url = 'https://api.cloudinary.com/v1_1/dhsiicpyj/image/upload'

fetch(url, {
    method: "POST",
    body: file
})
.then((response) => {
    return response.text();
})

