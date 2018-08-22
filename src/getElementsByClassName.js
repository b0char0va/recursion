// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
function getElementsByClassName(className) {
  //your code here
    var result = [];
    function getNodes(node) {
        if(node.classList && node.classList.contains(className)){
            result.push(node);
        }
        for(var i = 0; i < node.childNodes.length; i++) {
            getNodes(node.childNodes[i]);
        }
        return result;
    }
    getNodes(document.body);
    return result;
}



