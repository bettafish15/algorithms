function removeOccurrences(s: string, part: string): string {
    let stack: string[] = [];
    if ( part.length > s.length ) return s;
    for ( let i = 0; i < s.length; i++ ) {
        stack.push(s[i]);
        if ( stack.length >= part.length ) {
            let j = stack.length - 1;
            let k = 0;
            let isPossible = true;
            while ( k < part.length ) {
                if ( stack[j] !== part[part.length - k - 1] ) {
                    isPossible = false;
                    break;
                }
                k++;
                j--;
            }
            if ( isPossible ) {
                k = 0;
                while ( k < part.length ) {
                    stack.pop();
                    k++;
                }
            }
        }
    }
    return stack.join('');
};
