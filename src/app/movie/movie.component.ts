import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { MovieService, MovieDto, genreOptions  } from '@proxy/movies';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  providers: [
    ListService,
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter } ],
})
export class MovieComponent implements OnInit {
  movie = { items: [], totalCount: 0 } as PagedResultDto<MovieDto>;

  selectedMovie = {} as MovieDto; 
  
  form: FormGroup;
  genres = genreOptions;

  isModalOpen = false; 

  constructor(
    public readonly list: ListService, 
    private movieService: MovieService, 
    private fb: FormBuilder,
    private confirmation: ConfirmationService ) {}

  ngOnInit() {
    const movieStreamCreator = (query) => this.movieService.getList(query);

    this.list.hookToQuery(movieStreamCreator).subscribe((response) => {
      this.movie = response;
    });
  }


  createMovie() {
    this.selectedMovie = {} as MovieDto; 
    this.buildForm();
    this.isModalOpen = true;
  }

  editMovie(id: string) {
    this.movieService.get(id).subscribe((movie) => {
      this.selectedMovie = movie;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.movieService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  buildForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      genre: [null, Validators.required],
      releaseDate: [null, Validators.required],
      price: [null, Validators.required],
      synopsis: [null, Validators.required],
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const request = this.selectedMovie.id
      ? this.movieService.update(this.selectedMovie.id, this.form.value)
      : this.movieService.create(this.form.value);

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }
}