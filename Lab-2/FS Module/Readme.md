C: Create
R: Read
U: Update
D: Delete

# File System of NodeJS
It allows JS code running outside the browser and interact directly to operating system

## Common operations on file/folder
- Reading and writing files -> readFile(), writeFile(), appendFile()
- Directory management -> mkdir(), rmdir(), readdir()
- Metadata/information -> stat(), lstat(), fstat()
- Watching for changes -> watch(), watchFile(), unwatchFile()
- Streaming Large File -> createReadStream(), createWriteStrwam()
- File Operation -> rename(), truncate(), unlike(), link(), syslink()

await can be used with any promise in async function. taht async function also access by await keyword