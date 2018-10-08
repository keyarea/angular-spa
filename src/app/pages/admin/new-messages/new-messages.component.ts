import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AdminService } from '../admin.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-new-messages',
  templateUrl: './new-messages.component.html',
  styleUrls: ['./new-messages.component.css']
})
export class NewMessagesComponent implements OnInit {
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
  validateForm: FormGroup;
  @ViewChild('mentions') mentionChild;

  get mention(): AbstractControl { return  this.validateForm.get('mention'); }

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder
  ) {
    this.adminService.messageIsOpenChange(true);
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      mention: [ '@afc163 ', [ Validators.required, this.mentionValidator ] ],
      message: [ null, [ Validators.required ] ]
    });
  }

  mentionValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (this.mentionChild.getMentions().length < 2) {
      return { confirm: true, error: true };
    }
  }

  submitForm(): void {
    this.mention.markAsDirty();
    if (this.mention.valid) {
      console.log('Submit!!!', this.mention.value);
      console.log(this.mentionChild.getMentions());
    } else {
      console.log('Errors in form!!!');
    }
  }

  resetForm(): void {
    this.validateForm.reset({
      mention: '@afc163 '
    });
  }

}


