function powerof(n){
    for(i=0;i<n;i++){
        if(n===2*i) {
            return true;
        }
    }
    return false;
}
console.log(powerof(8))