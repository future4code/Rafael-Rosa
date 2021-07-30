const input1 = 'banana'
const input2 = 'bananex'

let isOneEdit = (value1, value2) => {

  let difference = 0

  if (value1.length >= value2.length) {
    for (i = 0; i < value1.length; i++) {
      if (value1[i] !== value2[i]) {
        difference++
      }
    }
  } else {
    for (i = 0; i < value2.length; i++) {
      if (value1[i] !== value2[i]) {
        difference++
      }
    }
  }

  if (difference > 1) {
    return false
  } else {
    return true
  }


}

isOneEdit(input1, input2)