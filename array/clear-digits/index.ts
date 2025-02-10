function clearDigits(s: string): string {
    const arr: (string | null)[] = s.split("")
    const deleted = Array.from({ length: s.length }).fill(null)

    // console.log('arr', arr)

    for(let i = 0; i < arr.length; i++) {
        // console.log('before', arr)
        if(!Number.isNaN(Number(arr[i]))) {
            deleted[i] = arr[i]
            arr[i] = null

            let j = i - 1

            while(j >= 0) {
                // console.log('j, arr[j]: ', j, arr[j])
                if(!deleted[j]) {
                    deleted[j] = arr[j]
                    arr[j] = null
                    break
                } else {
                    j -= 1
                }
            }
        }

        // console.log('after', arr)
    }

    // console.log(arr)

    return arr.filter(el => !!el).join("")
};
