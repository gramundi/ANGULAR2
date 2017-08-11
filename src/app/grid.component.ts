import { Component } from '@angular/core';
import { NgGridConfig, NgGridItemConfig, NgGridItemEvent } from "angular2-grid";

interface Column {
    id: number;
    name: string;
    config: NgGridItemConfig;
}


interface Row {
    rownum: number;
}



@Component({
  selector: 'grid-root',
  templateUrl: './view/grid.component.html',
  styleUrls: ['./css/grid.component.css']
})
export class GridComponent {
    public curRows: number = 3;
    public curColunms: number =5;
    public columns: Array<Column> = [];
    public rows: Array<Row> = [];
    public gridConfig: NgGridConfig = <NgGridConfig>{
        'margins': [5],
        'draggable': true,
        'resizable': true,
        'max_cols': 0,
        'max_rows': 0,
        'visible_cols': 0,
        'visible_rows': 0,
        'min_cols': 1,
        'min_rows': 2,
        'col_width': 2,
        'row_height': 2,
        'cascade': 'left',
        'min_width': 10,
        'min_height': 10,
        'fix_to_grid': false,
        'auto_style': true,
        'auto_resize': false,
        'maintain_ratio': false,
        'prefer_new': false,
        'zoom_on_drag': false,
        'limit_to_screen': true
    };
    private rgb: string = '#efefef';
    private curItemCheck: number = 0;
    private itemPositions: Array<any> = [];

    constructor() {
       
      for (let j = 1; j < this.curRows; j++){ 
        this.rows[j - 1]={ rownum: j };
        for (let i = 1; i < this.curColunms; i++) {
            const conf = this._generateDefaultItemConfig();
            conf.payload = i;
            this.columns[i - 1] = { id: i, name:"name"+i,config: conf };
        }
      }
      console.log(this.rows);
    }

    get ratioDisabled(): boolean {
        return (this.gridConfig.max_rows > 0 && this.gridConfig.visible_cols > 0) ||
            (this.gridConfig.max_cols > 0 && this.gridConfig.visible_rows > 0) ||
            (this.gridConfig.visible_cols > 0 && this.gridConfig.visible_rows > 0);
    }

    get itemCheck(): number {
        return this.curItemCheck;
    }

    set itemCheck(v: number) {
        console.log(v);
        this.curItemCheck = v;
    }

    get curItem(): NgGridItemConfig {
        return this.columns[this.curItemCheck] ? this.columns[this.curItemCheck].config : {};
    }

    addBox(): void {
        const conf: NgGridItemConfig = this._generateDefaultItemConfig();
        conf.payload = this.curColunms++;
        this.columns.push({ id: conf.payload,name:"new", config: conf });
    }

    removeBox(): void {
        if (this.columns[this.curItemCheck]) {
            this.columns.splice(this.curItemCheck, 1);
        }
    }

    updateItem(index: number, event: NgGridItemEvent): void {
        // Do something here
    }

    onDrag(index: number, event: NgGridItemEvent): void {
        // Do something here
    }

    onResize(index: number, event: NgGridItemEvent): void {
        // Do something here
    }

    public randomise(): void {
        for (const box of this.columns) {
            box.config.col = Math.floor(Math.random() * 6) + 1;
            box.config.row = 1;
        }
    }

    private _generateDefaultItemConfig(): NgGridItemConfig {
        return { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 };
    }

}
