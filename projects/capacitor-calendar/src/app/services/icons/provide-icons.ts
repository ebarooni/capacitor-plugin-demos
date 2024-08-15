import { APP_INITIALIZER } from '@angular/core';
import { IconsService } from './icons.service';

export function provideIcons() {
  return {
    provide: APP_INITIALIZER,
    deps: [IconsService],
    useFactory: (iconService: IconsService) => () =>
      iconService.registerIcons(),
    multi: true,
  };
}
