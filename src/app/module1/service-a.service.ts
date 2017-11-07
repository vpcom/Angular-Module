// This service is part of Module 1 and is injected throught the Module 1 provider.
// It is not correct as the service is available globally by default.

import { Injectable } from '@angular/core';

@Injectable()
export class ServiceAService {

  constructor() { }

  getData() {
    return "This is the string from the service A"
  }

}
