import { APP_INITIALIZER, Provider } from '@angular/core';
import { StoreService } from './store.service';

export function provideStore(): Provider {
  return {
    provide: APP_INITIALIZER,
    deps: [StoreService],
    useFactory: (storeService: StoreService) => () => storeService.init(),
    multi: true,
  };
}
