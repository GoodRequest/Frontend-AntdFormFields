const fs = require('fs')

try {
    fs.unlinkSync(__dirname + '/../src/styles/_theme.sass')
} catch {
    console.log('no theme to unlink')
}

try {
    fs.unlinkSync(__dirname + '/../src/styles/_generated-variables.scss')
} catch {
    console.log('no variables to unlink')
}

fs.symlink(__dirname + "/_theme.sass",
    __dirname + '/../src/styles/_theme.sass', 'file', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("\nSymlink to _theme.sass created");
    }
})

fs.symlink(__dirname + "/_generated-variables.scss",
    __dirname + '/../src/styles/_generated-variables.scss', 'file', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("\nSymlink to _generated-variables.scss created");
    }
})
