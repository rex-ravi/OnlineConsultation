import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = function () { return ["/"]; };
export class TopBarComponent {
    static { this.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TopBarComponent, selectors: [["app-top-bar"]], decls: 5, vars: 2, consts: [[3, "routerLink"], [1, "button", "fancy-button"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 0)(1, "h1");
            i0.ɵɵtext(2, "Online Counselling");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(3, "a", 1);
            i0.ɵɵtext(4, "Register");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(1, _c0));
        } }, dependencies: [i1.RouterLink] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TopBarComponent, [{
        type: Component,
        args: [{ selector: 'app-top-bar', template: "<a [routerLink]=\"['/']\">\r\n  <h1>Online Counselling</h1>\r\n</a>\r\n\r\n<a class=\"button fancy-button\">Register</a>\r\n\r\n", styles: ["\r\n\r\n/*\r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at https://angular.io/license\r\n*/"] }]
    }], null, null); })();
//# sourceMappingURL=top-bar.component.js.map