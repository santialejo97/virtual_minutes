import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-minute',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './minute.component.html',
  styleUrl: './minute.component.css',
})
export default class MinuteComponent implements OnInit {
  fb = inject(FormBuilder);
  signaturePad?: SignaturePad;
  @ViewChild('canvas', { static: true }) canvas?: ElementRef<HTMLCanvasElement>;

  formMinute: FormGroup = this.fb.group({
    fullName: ['Santiago Gaviria', Validators.required],
    workstation: [, Validators.required],
    charge: [, Validators.required],
    guardBadge: [, Validators.required],
    issue: [, Validators.required],
    signature: [, Validators.required],
    photo: [, Validators.required],
    description: [, Validators.required],
    date: [, Validators.required],
  });

  ngOnInit(): void {
    if (this.canvas != undefined)
      this.signaturePad = new SignaturePad(this.canvas.nativeElement);
  }

  clearSignature(): void {
    this.signaturePad?.clear();
  }

  send() {
    const signature = this.signaturePad?.toDataURL(); // Obtén la firma como imagen
    this.formMinute.get('signature')?.setValue(signature);
    console.log(this.formMinute.value);
    this.clearSignature();
  }

  // TODO: Metodo cancelar
  cancel() {}

  // TODO: Metodo guardar despues de tener el servicio de Brevo
  save() {}
}
