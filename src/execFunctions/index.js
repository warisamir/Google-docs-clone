export function executeCommand(command, arg) {
    switch(command) {
        case 'changeFontStyle':
            console.log(command, arg);
            document.execCommand('fontSize', null, arg[0])
            document.execCommand('foreColor', null, arg[1]);           
            break;
        default:
            document.execCommand(command, null, arg[0]);
            return {command: true}
    }
    
}   