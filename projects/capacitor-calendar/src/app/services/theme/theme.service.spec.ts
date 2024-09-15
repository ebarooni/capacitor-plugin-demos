import { TestBed } from '@angular/core/testing';
import {
  describe,
  beforeEach,
  test,
  expect,
  vi,
  afterAll,
  MockInstance,
} from 'vitest';
import { ThemeService } from './theme.service';
import { fromEvent, Subject } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

const matchMedia = vi.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

vi.stubGlobal('matchMedia', matchMedia);

vi.mock('rxjs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('rxjs')>()),
  fromEvent: vi.fn(),
}));

describe('ThemeService', () => {
  let service: ThemeService;
  let fromEventSubject: Subject<MediaQueryListEvent>;
  let scheduler: TestScheduler;

  beforeEach(() => {
    fromEventSubject = new Subject<MediaQueryListEvent>();
    (fromEvent as unknown as MockInstance).mockReturnValue(
      fromEventSubject.asObservable(),
    );

    TestBed.configureTestingModule({
      providers: [ThemeService],
    });
    service = TestBed.inject(ThemeService);

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).deep.equal(expected);
    });
  });

  afterAll(() => {
    vi.unstubAllGlobals();
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test.each([true, false])(
    'should start with false initial dark mode followed by %s',
    (isDarkMode) => {
      const event = { matches: isDarkMode } as MediaQueryListEvent;
      scheduler.run(({ cold, expectObservable }) => {
        cold('-a').subscribe(() => fromEventSubject.next(event));
        expectObservable(service.isDarkMode$).toBe('ab', {
          a: false, // from the global stub above
          b: event.matches,
        });
      });
    },
  );
});
