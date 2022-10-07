import {Component, Input} from "@angular/core";

@Component({
  selector:"teacher",
  templateUrl: `./teacher.component.html`
})
export class TeacherComponent{
nametitcho =  "Trịnh Quang Hòa";

@Input()
  school?: string;

mail = "...";
sdt = "...";
address = "Hà Lội";
}
