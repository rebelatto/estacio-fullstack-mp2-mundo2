
/* Funçao swap*/
const swap = (array, pos1, pos2) => {
	[array[pos1], array[pos2]] = [array[pos2], array[pos1]];
  };


/* Funçao shufle*/
  const shuffle = (array, numSwaps) => {
	for (let i = 0; i < numSwaps; i++) {
	  const pos1 = Math.floor(Math.random() * array.length);
	  const pos2 = Math.floor(Math.random() * array.length);
	  swap(array, pos1, pos2);
	}
  };


/* Funçao bubble_sort*/
  const bubbleSort = (array) => {
	const len = array.length;
	for (let i = 0; i < len - 1; i++) {
	  for (let j = 0; j < len - 1 - i; j++) {
		if (array[j] > array[j + 1]) {
		  swap(array, j, j + 1);
		}
	  }
	}
  };

  /* Funçao selection_sort*/
  const selectionSort = (array) => {
	const len = array.length;
	for (let i = 0; i < len - 1; i++) {
	  let minIndex = i;
	  for (let j = i + 1; j < len; j++) {
		if (array[j] < array[minIndex]) {
		  minIndex = j;
		}
	  }
	  if (minIndex !== i) {
		swap(array, i, minIndex);
	  }
	}
  };
  

  /* Funçao quickSort*/
  const quickSort = (array, start, end) => {
	if (start < end) {
	  const pivotIndex = partition(array, start, end);
	  quickSort(array, start, pivotIndex - 1);
	  quickSort(array, pivotIndex + 1, end);
	}
  };
  
  /* particionamento*/
  const partition = (array, start, end) => {
	const pivot = array[end];
	let i = start - 1;
  
	for (let j = start; j < end; j++) {
	  if (array[j] <= pivot) {
		i++;
		swap(array, i, j);
	  }
	}
  
	swap(array, i + 1, end);
	return i + 1;
  };
  
  
  