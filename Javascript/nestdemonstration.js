for (i=1; i<=3; i++) {
    console.log("OUTER. This is the first and therefore outer loop. It counts everytime it runs.", i)
    for (x=1; x<=3; x++) {
        console.log("MIDDLE. This is the second and therefore middle tier loop. Look at it count inside.", x)
        for (y=1; y<=3; y++) {
            console.log ("INNER. This is the last function, and most inner part of the loop. Watch it count inside.", y)
        }
    }
}