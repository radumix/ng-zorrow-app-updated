import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { IconsProviderModule } from '../../icons-provider.module';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { en_US, NgZorroAntdModule, NzButtonModule, NzFormModule, NzInputModule, NzLayoutModule, NzMenuModule, NZ_I18N } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(en);

@NgModule({
  imports: [WelcomeRoutingModule, IconsProviderModule, NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NgZorroAntdModule,
    NzInputModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class WelcomeModule { }

