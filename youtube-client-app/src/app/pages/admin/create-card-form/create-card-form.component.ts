import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ICard } from '../../../core/index';
import { regExpValidUrl, regExpValidDate } from '../../../shared/index';

@Component({
  selector: 'app-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCardFormComponent {
  @Output() create = new EventEmitter<ICard>();

  public cardForm = this.fb.group({
    title: ['', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]
    }],
    description:['', {
      validators: [
        Validators.maxLength(256)
      ]
    }],
    image:['', {
      validators: [
        Validators.required,
        Validators.pattern(regExpValidUrl)
      ],
    }],
    video:['', {
      validators: [
        Validators.required,
        Validators.pattern(regExpValidUrl)
      ],
    }],
    date:['', {
      validators: [
        Validators.required,
        Validators.pattern(regExpValidDate)
      ],
    }]
  })

constructor(private fb: FormBuilder) {}

  onSubmit() {
    if(this.cardForm.valid) {
      const {...cardDetails} = this.cardForm.value;
      this.create.emit(cardDetails as ICard);
    }
  }
}
