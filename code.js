function mergesort(array) {
    if (array.length <= 1) {
        return array;
    } else {
        let len = array.length;
        for (let size = 1; size < len; size *= 2) {
          for (let left = 0; left < len - size; left += 2*size) {
            let mid = left + size;
            let right = Math.min(left + 2*size, len);
            let i = left, j = mid;
            while (i < mid && j < right) {
              if (array[i] > array[j]) {
                let temp = array[j];
                for (let k = j; k > i; k--) {
                  array[k] = array[k - 1];
                }
                array[i] = temp;
                mid++;
                j++;
              }
              i++;
            }
          }
        }
    }
    return array;
  }