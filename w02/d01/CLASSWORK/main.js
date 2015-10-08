var nodeAnchor = document.querySelector('a');
console.log(nodeAnchor);

var properties = [];

for (var key in nodeAnchor) {
  properties.push(key);
}

console.log(properties.sort());
