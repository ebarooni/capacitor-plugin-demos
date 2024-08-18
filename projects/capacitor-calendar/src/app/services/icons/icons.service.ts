import { Injectable } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  codeSlash,
  clipboard,
  settings,
  logoApple,
  logoAndroid,
  logoNpm,
  moon,
  cube,
  exitOutline,
} from 'ionicons/icons';

@Injectable({ providedIn: 'root' })
export class IconsService {
  private static readonly ICONS = {
    codeSlash,
    clipboard,
    settings,
    logoApple,
    logoAndroid,
    logoNpm,
    moon,
    cube,
    exitOutline,
  };

  registerIcons(): void {
    addIcons(IconsService.ICONS);
  }
}
