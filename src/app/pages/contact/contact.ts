import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  // ⚠️ NOTE: Jigyasa ko apne EmailJS IDs update karni hongi
  private serviceID = 'service_cc27v6g';      
  private templateID = 'template_b7xm1nr';    
  private publicKey = 'IxqkV5FRYP22Bb6Fk';    

  contactInfo = [
    {
      icon: 'geo-alt-fill',
      title: 'Location',
      value: 'Udaipur, Rajasthan',
      link: null
    },
    {
      icon: 'envelope-fill',
      title: 'Email',
      value: 'jigyasagohil101@gmail.com',
      link: 'mailto:jigyasagohil101@gmail.com'
    },
    {
      icon: 'telephone-fill',
      title: 'Phone',
      value: '+91 8302760220',
      link: 'tel:+918302760220'
    }
  ];

  socialLinks = [
    { icon: 'github', name: 'GitHub', url: 'https://github.com/jigyasa125', color: '#333' },
    { icon: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/jigyasa-gohil', color: '#0077b5' },
    { icon: 'envelope-at', name: 'Email', url: 'mailto:jigyasagohil101@gmail.com', color: '#ea4335' },
    { icon: 'whatsapp', name: 'WhatsApp', url: 'https://wa.me/918302760220', color: '#25d366' }
  ];

  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  
  // ✅ Validation errors
  validationErrors = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // ✅ Email validation regex pattern
  private emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  onSubmit() {
    // ✅ Clear previous errors
    this.clearValidationErrors();

    if (this.isFormValid()) {
      this.isSubmitting = true;
      this.submitError = false;

      emailjs.send(
        this.serviceID,
        this.templateID,
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          subject: this.formData.subject,
          message: this.formData.message
        },
        this.publicKey
      )
      .then((response: any) => {
        console.log('✅ Email sent successfully!', response.status);
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.resetForm();

        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      })
      .catch((error: any) => {
        console.error('❌ Email failed:', error);
        this.isSubmitting = false;
        this.submitError = true;

        setTimeout(() => {
          this.submitError = false;
        }, 5000);
      });
    }
  }

  // ✅ Enhanced validation with error messages
  isFormValid(): boolean {
    let isValid = true;

    // Name validation
    if (!this.formData.name || this.formData.name.trim().length < 2) {
      this.validationErrors.name = 'Name must be at least 2 characters long';
      isValid = false;
    }

    // Email validation
    if (!this.formData.email) {
      this.validationErrors.email = 'Email is required';
      isValid = false;
    } else if (!this.isValidEmail(this.formData.email)) {
      this.validationErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Subject validation
    if (!this.formData.subject || this.formData.subject.trim().length < 3) {
      this.validationErrors.subject = 'Subject must be at least 3 characters long';
      isValid = false;
    }

    // Message validation
    if (!this.formData.message || this.formData.message.trim().length < 10) {
      this.validationErrors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    return isValid;
  }

  // ✅ Email validation function
  isValidEmail(email: string): boolean {
    return this.emailPattern.test(email);
  }

  // ✅ Clear validation errors
  clearValidationErrors() {
    this.validationErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  // ✅ Real-time email validation (optional - for better UX)
  validateEmailOnBlur() {
    if (this.formData.email && !this.isValidEmail(this.formData.email)) {
      this.validationErrors.email = 'Please enter a valid email address';
    } else {
      this.validationErrors.email = '';
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.clearValidationErrors();
  }
}