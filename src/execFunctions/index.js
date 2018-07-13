export function executeCommand(command, arg) {
    console.log(command, arg);
    document.execCommand(command, null, arg);
}   