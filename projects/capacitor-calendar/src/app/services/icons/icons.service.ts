import { Injectable } from '@angular/core';
import { addIcons } from 'ionicons';
import { codeSlash } from 'ionicons/icons';

@Injectable({ providedIn: 'root' })
export class IconsService {
  private static readonly ICONS = { codeSlash };

  registerIcons(): void {
    addIcons(IconsService.ICONS);
  }
}
