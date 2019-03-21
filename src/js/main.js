(function() {
  const _container = document.querySelector('#container');
  const btnAdd = document.querySelector('#add-row');
  let _array = [];
  let _config = {
    rows : 10,
    columns : 15
  }

  function init(config) {
    const table = new Build;
    table.buildTable(_array, _config);
  }

  window.onload = function() {
    init(_config);

    btnAdd.addEventListener('click', () => {
      Build.addRow(_config.columns);
    });
    //console.log(_array);
    /*_array.forEach((element,i) => {
      element.forEach((e,j) => {
        e.addEventListener('click', ()=> {
          console.log('hola');
        });
      });
    });*/
  };

})();

