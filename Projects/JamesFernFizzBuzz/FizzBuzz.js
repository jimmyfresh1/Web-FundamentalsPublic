var msg = ''
for ( i =1 ; i<=100; i=i+1){
    if (i%3 ==0 && i%5==0){
        msg ='fizzbuzz'
        console.log('fizzbuzz')
    }
    else if (i%3 ==0) {
        msg = 'fizz'
        console.log(msg)
    }
    else if (i%5 ==0){
        msg= 'buzz'
        console.log(msg)
        }
    else {
        console.log(i)
        }
    }