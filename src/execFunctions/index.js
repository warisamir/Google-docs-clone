export function executeCommand(command, arg) {
    switch(command) {
        case 'changeFontStyle':
            document.execCommand('foreColor', null, arg.color);  
            document.execCommand('fontSize', null, arg.size)
            break;
        default:
            document.execCommand(command, null, arg);
    }
    
}   