
let doBtn = document.querySelector("#do");

doBtn.addEventListener('click', function () {
    document.querySelector("#header").innerHTML = 'We changed you';
    requirejs(["helper/util"]);
    console.log('Header changed and something new was added');
});
