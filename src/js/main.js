const main = (function() {
  const _container = document.querySelector('.cont-table');
  const btnAddRow = document.querySelector('#add-row');
  const btnAddColumn = document.querySelector('#add-column');

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

  btnAddRow.addEventListener('click', () => {
    const newRow = new build();
    newRow.addRow();
    newRow.render();
  });

  btnAddColumn.addEventListener('click', () => {
    const newColumn = new build();
    newColumn.addColumn();
    newColumn.render();
  });

  window.onload = function() {
    init();
  };
})();
