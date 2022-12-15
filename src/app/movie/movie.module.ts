import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MovieComponent],
  imports: [
    MovieRoutingModule,
    SharedModule,
    NgbDatepickerModule,
  ]
})
export class MovieModule { }
