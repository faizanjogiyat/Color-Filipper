let colors = ['red', 'orange', 'purple', 'yellow', 'cyan', 'blue', 'gray', 'Blue', 'Blueviolet', 'Brown', 'Burlywood', 'Cadetblue', 'Chartreuse', 'Chocolate', 'Coral', 'Cornflowerblue', 'Cornsilk', 'Crimson', 'Cyan', 'Darkblue', 'Darkcyan', 'Darkgoldenrod', 'Darkgray', 'Darkgreen', 'Darkkhaki', 'Darkolivegreen', 'Darkorange', 'Darkorchid']
function filipper() {
  const random = Math.floor(Math.random() * colors.length);
  console.log(random)
  document.body.style.background = colors[random];

  let name = document.getElementsByTagName("span")[0]
  name.innerHTML = colors[random]
  console.log(name, colors[random], 'name');
}

