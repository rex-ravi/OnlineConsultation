import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppModule {
    static { this.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [BrowserModule,
            ReactiveFormsModule,
            RouterModule.forRoot([
                { path: '', component: ProductListComponent },
            ])] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                imports: [
                    BrowserModule,
                    ReactiveFormsModule,
                    RouterModule.forRoot([
                        { path: '', component: ProductListComponent },
                    ])
                ],
                declarations: [
                    AppComponent,
                    TopBarComponent,
                    ProductListComponent
                ],
                bootstrap: [
                    AppComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        TopBarComponent,
        ProductListComponent], imports: [BrowserModule,
        ReactiveFormsModule, i1.RouterModule] }); })();
//# sourceMappingURL=app.module.js.map