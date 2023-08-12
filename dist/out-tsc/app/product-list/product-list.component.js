import { Component } from '@angular/core';
import { products } from '../products';
import * as i0 from "@angular/core";
export class ProductListComponent {
    constructor() {
        this.products = [...products];
    }
    share() {
        window.alert('The product has been shared!');
    }
    static { this.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 2, vars: 0, template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h2");
            i0.ɵɵtext(1, "Products");
            i0.ɵɵelementEnd();
        } } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductListComponent, [{
        type: Component,
        args: [{ selector: 'app-product-list', template: "<h2>Products</h2>", styles: ["\r\n\r\n/*\r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at https://angular.io/license\r\n*/"] }]
    }], null, null); })();
//# sourceMappingURL=product-list.component.js.map