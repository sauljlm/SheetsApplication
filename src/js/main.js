const main = (function() {
  const _container = document.querySelector('.cont-table');
  const btnAdd = document.querySelector('#add-row');

  let config = {
    rows : 10,
    columns : 15
  }

  function init() {
    const table = new build();
    for (let i = 0; i < config.columns; i += 1) {
      table.addColumn();
    }
    for (let j = 0; j < config.rows; j += 1) {
      table.addRow();
    }
    table.render();
  }

  window.onload = function() {
    init();
  };
})();
