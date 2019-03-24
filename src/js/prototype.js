const build = (function(){
  const container = document.querySelector('.cont-table');
  let instance = null;
  let DATA = [[]];

  return class Build {
    constructor() {
      if(instance) return instance;
      return instance = this;
    }

    addRow(value = '') {
      let column = [];
      for (let i = 0; i < DATA[0].length; i++) {
        column.push(value);
      }
      DATA.push(column);
      console.log(DATA);
      return DATA;
    }

    addColumn(value = '') {
      DATA.forEach((row) => {
        row.push(value);
      }); 
      console.log(DATA);
    }

    render() {
      container.innerHTML = '';
      let table = createDoom.element('table');
      DATA.forEach((row, rowIndex) => {
        let tr = createDoom.tr();
        tr.appendChild(createDoom.th(rowIndex+1));
        row.forEach((column, columnIndex) => {
          tr.appendChild(createDoom.td(column, rowIndex, columnIndex));
        });
        table.setAttribute('class', 'customers');
        table.appendChild(tr);
      });
      container.appendChild(table);
    }


    write(row) {
      const input = CreateDoom.element('input', {type: 'type', value : 'text'});
      input.CreateDoom.atribute({type: 'class', value : 'write'});
      row.appendChild(input);
    }
  }  
})();
