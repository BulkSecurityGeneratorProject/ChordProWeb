import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { ChordProSharedModule } from 'app/shared';
import {
  SongComponent,
  SongDetailComponent,
  SongUpdateComponent,
  SongDeletePopupComponent,
  SongDeleteDialogComponent,
  songRoute,
  songPopupRoute
} from './';

const ENTITY_STATES = [...songRoute, ...songPopupRoute];

@NgModule({
  imports: [ChordProSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [SongComponent, SongDetailComponent, SongUpdateComponent, SongDeleteDialogComponent, SongDeletePopupComponent],
  entryComponents: [SongComponent, SongUpdateComponent, SongDeleteDialogComponent, SongDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChordProSongModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
