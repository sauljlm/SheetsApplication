class Build {
  constructor() {
    this._column = null;
    this._container = document.querySelector('#container');
  }

  buildTable(_array, config) {
    const array = [];

    for (let i = 0; i < config.rows; i += 1) {
      array[i] = [];
      const column = CreateDoom.element('tr');
      array[i].push(column);
      console.log(array);
      this._container.appendChild(column);
      for (let j = 0; j < config.columns; j += 1) {
        let row = null;
        row = this.configTable(row, i, j);
        // console.log(row);
        array[i][j].push(row);
        column.appendChild(row);
      }
    }
    console.log(array);
    _array.push(array);
  }

  configTable(row, i, j) {
    if(i === 0 || j === 0) {
      row = CreateDoom.element('th');
    } else if (i === 0 && i > 0) {
      row = CreateDoom.element('th');
      row.innerHTML = `${_array[i][i]}`;
    } else {
      row = CreateDoom.element('td');
    }
    return row;
  }

  addRow(columns) {
    let row = null;
    _column.appendChild(this.configTable(row, i, j));
  }

  write(row) {
    const input = CreateDoom.element('input', {type: 'type', value : 'text'});
    input.CreateDoom.atribute({type: 'class', value : 'write'});
    row.appendChild(input);
  }
}
