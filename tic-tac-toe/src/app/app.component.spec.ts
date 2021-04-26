import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TicTacToeModule } from './tic-tac-toe';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        TicTacToeModule
      ]
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('tic-tac-toe app is running!');
  });
});
