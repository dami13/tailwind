import { Component } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder } from "@angular/forms";
import { DataService } from "../service/data.service";

@Component({
    standalone: true,
    selector: 'app-tailwind',
    templateUrl: './tailwind.component.html',
    imports: []
})
export class TailwindComponent {
  constructor(private fb: NonNullableFormBuilder, private dataService: DataService) {
  }

  form = this.fb.group({
    data: this.fb.array([this.fb.group({
      name: 'damian',
      title: 'tr'
    })])
  })

  onClick() {
    this.dataService.post(this.form.controls.data.getRawValue()).subscribe();
  }
}
