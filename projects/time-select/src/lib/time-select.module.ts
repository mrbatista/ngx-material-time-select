import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {A11yModule} from '@angular/cdk/a11y';
import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import {MatTimeSelectIntl} from './time-select-intl.service';

import {
  MAT_TIME_SELECT_SCROLL_STRATEGY_FACTORY_PROVIDER,
  MatTimeSelectComponent,
  MatTimeSelectContentComponent
} from './time-select.component';
import {MatTimeSelectInputDirective} from './time-select-input.directive';
import {MatTimeSelectToggleComponent, MatTimeSelectToggleIconDirective} from './time-select-toggle.component';
import {MatTimeUnitOptionComponent} from './time-unit-option.component';
import {MatTimeUnitSelectComponent} from './time-unit-select.component';

@NgModule({
    imports: [
        CommonModule,
        OverlayModule,
        A11yModule,
        PortalModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatRippleModule
    ],
    declarations: [
        MatTimeSelectComponent,
        MatTimeSelectContentComponent,
        MatTimeSelectInputDirective,
        MatTimeSelectToggleComponent,
        MatTimeSelectToggleIconDirective,
        MatTimeUnitOptionComponent,
        MatTimeUnitSelectComponent
    ],
    exports: [
        MatTimeSelectComponent,
        MatTimeSelectContentComponent,
        MatTimeSelectInputDirective,
        MatTimeSelectToggleComponent,
        MatTimeSelectToggleIconDirective,
        MatTimeUnitOptionComponent,
        MatTimeUnitSelectComponent
    ],
    providers: [
        MatTimeSelectIntl,
        MAT_TIME_SELECT_SCROLL_STRATEGY_FACTORY_PROVIDER
    ]
})
export class MatTimeSelectModule { }
