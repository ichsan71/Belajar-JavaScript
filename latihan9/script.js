var s ='';

for (var i = 0; i < 10; i++) {
    
    for (var x = 0; x < i; x++) {
        s += '*';        
    }
    s += '\n';
}

for (var i = 10; i > 0; i--) {
    
    for (var x = 0; x < i; x++) {
        s += '*';        
    }
    s += '\n';
}
console.log(s);