/*Tạo hàm đếm số lần xuất hiện của một phần tử trong mảng JavaScript*/
function count_element_in_array(array, x) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == x) //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
      count++;
  }
  console.log("Phan tu " + x + " xuat hien " + count + " lan");
}

let array = [5, 2, 3, 5, 2, 3, 2, 4];

/*Xóa phần tử trùng nhau và lấy các phần tử duy nhất*/
let arrayWithNoSameElement = array.reduce(function (array, element) {
  if (array.indexOf(element) === -1) {
    array.push(element)
  }
  return array
}, [])


/*đếm số lần xuất hiện của các phần tử duy nhất*/
arrayWithNoSameElement.forEach(e => {
  return count_element_in_array(array, e);
})
