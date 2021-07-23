

let thead = document.querySelector('thead');
let tbody = document.querySelector('tbody');
let trak = document.querySelectorAll('.sort1');

thead.addEventListener('click', ({ target }) => {
  const index = [...target.parentNode.cells].indexOf(target);
  target.dataset.order = -(target.dataset.order || -1);
  for (let cell of target.parentNode.cells) {
    cell.classList.toggle('sorted', cell == target);
  }

  func(index, [...trak], [...target.parentNode.cells])
})
//const index = [...target.parentNode.cells].indexOf(target);
function func(index, c, b) {
  let th = document.querySelectorAll('th');
  let i = [th[index]];
  for (let elem of c) {
    [elem.children[index].innerHTML, elem.children[index + 1].innerHTML] = [elem.children[index + 1].innerHTML, elem.children[index].innerHTML];
    //i.push(elem.children[index]);
  }
  [th[index].innerHTML, th[index + 1].innerHTML] = [th[index + 1].innerHTML, th[index].innerHTML];

  console.log(i);

}
