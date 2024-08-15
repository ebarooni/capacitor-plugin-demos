import { Injectable } from '@angular/core';
import { addIcons } from 'ionicons';
import { codeSlash, clipboard, settings } from 'ionicons/icons';

@Injectable({ providedIn: 'root' })
export class IconsService {
  private static readonly ICONS = { codeSlash, clipboard, settings };

  registerIcons(): void {
    addIcons(IconsService.ICONS);
  }
}
