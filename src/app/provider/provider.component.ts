import { Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent {
  coverCtx = {
      b: {
        name: `David's Summer`,
        author: 'Lee Gabel'
      }
  }

  @Input()
  coverTemplate: TemplateRef<any> = null

  click = ()=> {
    console.log('Working barely')
  }
}
