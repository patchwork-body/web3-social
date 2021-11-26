import {render, screen} from '@testing-library/angular'
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  it('should render title', async () => {
    await render(AppComponent, {imports: [RouterTestingModule]});
    expect(screen.queryByRole('heading')).toBeInTheDocument()
  });
});
