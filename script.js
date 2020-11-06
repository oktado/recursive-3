function recursive (n) {
    if (n==1) {
        return 3
    }else {
       return 2 * recursive(n-1)
    }

}

console.log(recursive(3));