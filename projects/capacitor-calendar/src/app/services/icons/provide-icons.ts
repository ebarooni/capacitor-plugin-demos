import { APP_INITIALIZER, Provider } from '@angular/core';
import { IconsService } from './icons.service';

export function provideIcons(): Provider {
  return {
    provide: APP_INITIALIZER,
    deps: [IconsService],
    useFactory: (iconService: IconsService) => () =>
      iconService.registerIcons(),
    multi: true,
  };
}
