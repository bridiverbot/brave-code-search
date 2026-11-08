// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getTrustedHTML } from 'chrome://resources/js/static_types.js';
import { CrLitElement, html } from 'chrome://resources/lit/v3_0/lit.rollup.js';
// 
import { assertDeepEquals, assertEquals, assertFalse, assertNotEquals, assertNotReached, assertNull, assertThrows, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { eventToPromise, microtasksFinished } from 'chrome://webui-test/test_util.js';
const LifecycleCallbackTrackerMixin = (superClass) => {
    class LifecycleCallbackTrackerMixin extends superClass {
        lifecycleCallbacks = [];
        connectedCallback() {
            this.lifecycleCallbacks.push('connectedCallback');
            super.connectedCallback();
        }
        disconnectedCallback() {
            this.lifecycleCallbacks.push('disconnectedCallback');
            super.disconnectedCallback();
        }
        performUpdate() {
            this.lifecycleCallbacks.push('performUpdate');
            super.performUpdate();
        }
    }
    return LifecycleCallbackTrackerMixin;
};
const CrDummyLitElementBase = LifecycleCallbackTrackerMixin(CrLitElement);
class CrDummyLitElement extends CrDummyLitElementBase {
    static get is() {
        return 'cr-dummy-lit';
    }
    render() {
        return html `
      <div id="foo">Hello Foo</div>
      <div id="bar">Hello Bar</div>
    `;
    }
}
customElements.define(CrDummyLitElement.is, CrDummyLitElement);
class CrDummyPropertiesWithNotifyElement extends CrLitElement {
    static get is() {
        return 'cr-dummy-properties-with-notify';
    }
    static get properties() {
        return {
            prop1: {
                type: Boolean,
                notify: true,
            },
            prop2: {
                type: Boolean,
                notify: false,
            },
            prop3: { type: Boolean },
            propFour: {
                type: Boolean,
                notify: true,
            },
            prop5: {
                type: Boolean,
                notify: true,
            },
        };
    }
    #prop1_accessor_storage = false;
    get prop1() { return this.#prop1_accessor_storage; }
    set prop1(value) { this.#prop1_accessor_storage = value; }
    #prop2_accessor_storage = false;
    get prop2() { return this.#prop2_accessor_storage; }
    set prop2(value) { this.#prop2_accessor_storage = value; }
    #prop3_accessor_storage = false;
    get prop3() { return this.#prop3_accessor_storage; }
    set prop3(value) { this.#prop3_accessor_storage = value; }
    #propFour_accessor_storage = false;
    get propFour() { return this.#propFour_accessor_storage; }
    set propFour(value) { this.#propFour_accessor_storage = value; }
    #prop5_accessor_storage = false;
    get prop5() { return this.#prop5_accessor_storage; }
    set prop5(value) { this.#prop5_accessor_storage = value; }
}
customElements.define(CrDummyPropertiesWithNotifyElement.is, CrDummyPropertiesWithNotifyElement);
class CrDummyPropertiesWithReflectElement extends CrLitElement {
    static get is() {
        return 'cr-dummy-properties-with-reflect';
    }
    static get properties() {
        return {
            prop1: {
                type: Boolean,
                reflect: true,
            },
            prop2WithSuffix: {
                type: Boolean,
                reflect: true,
            },
            prop3: { type: Boolean },
            propFour: {
                type: Boolean,
                reflect: true,
            },
        };
    }
    #prop1_accessor_storage = false;
    get prop1() { return this.#prop1_accessor_storage; }
    set prop1(value) { this.#prop1_accessor_storage = value; }
    #prop2WithSuffix_accessor_storage = false;
    get prop2WithSuffix() { return this.#prop2WithSuffix_accessor_storage; }
    set prop2WithSuffix(value) { this.#prop2WithSuffix_accessor_storage = value; }
    #prop3_accessor_storage = false;
    get prop3() { return this.#prop3_accessor_storage; }
    set prop3(value) { this.#prop3_accessor_storage = value; }
    #propFour_accessor_storage = false;
    get propFour() { return this.#propFour_accessor_storage; }
    set propFour(value) { this.#propFour_accessor_storage = value; }
}
customElements.define(CrDummyPropertiesWithReflectElement.is, CrDummyPropertiesWithReflectElement);
suite('CrLitElement', function () {
    setup(function () {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
    });
    test('ForcedRendering_ConnectedCallback', function () {
        const element = document.createElement('cr-dummy-lit');
        assertNull(element.shadowRoot);
        document.body.appendChild(element);
        // Test that the order of lifecycle callbacks is as expected.
        assertDeepEquals(['connectedCallback', 'performUpdate'], element.lifecycleCallbacks);
        // Purposefully *not* calling `await element.updateComplete` here, to ensure
        // that initial rendering is synchronous when subclassing CrLitElement.
        assertNotEquals(null, element.shadowRoot);
    });
    // 
    test('DollarSign_ErrorWhenNotConnectedOnce', function () {
        const element = document.createElement('cr-dummy-lit');
        assertDeepEquals([], element.lifecycleCallbacks);
        assertThrows(function () {
            element.$.foo;
            assertNotReached('Previous statement should have thrown an exception');
        }, 'CrLitElement CR-DUMMY-LIT accessed \'$.foo\' before connected at least once.');
        assertThrows(function () {
            element.id = 'dummyId';
            element.$.foo;
            assertNotReached('Previous statement should have thrown an exception');
        }, 'CrLitElement CR-DUMMY-LIT#dummyId accessed \'$.foo\' before connected at least once.');
        assertDeepEquals([], element.lifecycleCallbacks);
    });
    test('DollarSign_WorksAfterDisconnected', function () {
        const element = document.createElement('cr-dummy-lit');
        assertDeepEquals([], element.lifecycleCallbacks);
        document.body.appendChild(element);
        assertDeepEquals(['connectedCallback', 'performUpdate'], element.lifecycleCallbacks);
        element.remove();
        assertDeepEquals(['connectedCallback', 'performUpdate', 'disconnectedCallback'], element.lifecycleCallbacks);
        assertFalse(element.isConnected);
        assertNotEquals(null, element.$.foo);
    });
    test('DollarSign_WorksWhenConnected', function () {
        const element = document.createElement('cr-dummy-lit');
        document.body.appendChild(element);
        assertDeepEquals(['connectedCallback', 'performUpdate'], element.lifecycleCallbacks);
        // Purposefully *not* calling `await element.updateComplete` here, to ensure
        // that initial rendering is synchronous when subclassing CrLitElement.
        assertTrue(!!element.$.foo);
        assertEquals('Hello Foo', element.$.foo.textContent);
        assertTrue(!!element.$.bar);
        assertEquals('Hello Bar', element.$.bar.textContent);
        // Test again lifecycle callbacks to ensure that performUpdate() has not
        // been called a second time as part of accessing the $ dictionary.
        assertDeepEquals(['connectedCallback', 'performUpdate'], element.lifecycleCallbacks);
    });
    // Test that properties are initialized correctly from attributes.
    test('PropertiesAttributesNameMapping', function () {
        class CrDummyAttributesLitElement extends CrLitElement {
            static get is() {
                return 'cr-dummy-attributes-lit';
            }
            static get properties() {
                return {
                    fooBarBoolean: { type: Boolean },
                    fooBarString: { type: String },
                    fooBarStringCustom: {
                        attribute: 'foobarstringcustom',
                        type: String,
                    },
                };
            }
            #fooBarBoolean_accessor_storage = false;
            get fooBarBoolean() { return this.#fooBarBoolean_accessor_storage; }
            set fooBarBoolean(value) { this.#fooBarBoolean_accessor_storage = value; }
            #fooBarString_accessor_storage = 'hello';
            get fooBarString() { return this.#fooBarString_accessor_storage; }
            set fooBarString(value) { this.#fooBarString_accessor_storage = value; }
            #fooBarStringCustom_accessor_storage = 'hola';
            get fooBarStringCustom() { return this.#fooBarStringCustom_accessor_storage; }
            set fooBarStringCustom(value) { this.#fooBarStringCustom_accessor_storage = value; }
        }
        customElements.define(CrDummyAttributesLitElement.is, CrDummyAttributesLitElement);
        document.body.innerHTML = getTrustedHTML `
      <cr-dummy-attributes-lit foo-bar-boolean foo-bar-string="world"
          foobarstringcustom="custom">
      </cr-dummy-attributes-lit>
    `;
        const element = document.body.querySelector('cr-dummy-attributes-lit');
        assertTrue(!!element);
        assertTrue(element.fooBarBoolean);
        assertEquals('world', element.fooBarString);
        assertEquals('custom', element.fooBarStringCustom);
    });
    test('PropertiesWithNotify', async function () {
        const element = document.createElement('cr-dummy-properties-with-notify');
        function unexpectedEventListener(e) {
            assertNotReached(`Unexpected event caught: ${e.type}`);
        }
        // Ensure that properties without 'notify: true' don't trigger events.
        element.addEventListener('prop2-changed', unexpectedEventListener);
        element.addEventListener('prop3-changed', unexpectedEventListener);
        // Ensure that properties with 'notify: true' that
        //   1) have a non-undefined initial value AND
        //   2) are changed back to undefined before the element is connected
        // also don't trigger updates.
        element.addEventListener('prop5-changed', unexpectedEventListener);
        element.prop5 = undefined;
        // Ensure that properties with 'notify: true' trigger events.
        // Case1: An event should be fired after the element is initialized to
        // propagate the initial value of the reactive property.
        const whenFired1 = Promise.all([
            eventToPromise('prop1-changed', element),
            eventToPromise('prop-four-changed', element),
        ]);
        document.body.appendChild(element);
        const events = await whenFired1;
        for (const event of events) {
            assertFalse(event.bubbles);
            assertFalse(event.composed);
            assertDeepEquals({ value: false }, event.detail);
        }
        // Case2: An event should be fired whenever the property changes.
        let whenFired2 = eventToPromise('prop1-changed', element);
        element.prop1 = true;
        let event = await whenFired2;
        assertFalse(event.bubbles);
        assertFalse(event.composed);
        assertDeepEquals({ value: true }, event.detail);
        whenFired2 = eventToPromise('prop-four-changed', element);
        element.propFour = true;
        event = await whenFired2;
        assertFalse(event.bubbles);
        assertFalse(event.composed);
        assertDeepEquals({ value: true }, event.detail);
    });
    // 
    test('Fire', async function () {
        const element = document.createElement('cr-dummy-lit');
        document.body.appendChild(element);
        const dummyEventName = 'dummy-event';
        const dummyPayload = 'hello dummy';
        const whenFired = eventToPromise(dummyEventName, element);
        element.fire(dummyEventName, dummyPayload);
        const event = await whenFired;
        assertTrue(event.bubbles);
        assertTrue(event.composed);
        assertEquals(dummyPayload, event.detail);
    });
    // Checks that properties and attributes map correctly for various cases.
    test('Property to attribute mapping', async function () {
        const element = document.createElement('cr-dummy-properties-with-reflect');
        document.body.appendChild(element);
        assertFalse(element.hasAttribute('prop1'));
        assertFalse(element.hasAttribute('prop2-with-suffix'));
        assertFalse(element.hasAttribute('prop-four'));
        // Property -> attribute
        element.prop1 = true;
        element.prop2WithSuffix = true;
        element.propFour = true;
        await microtasksFinished();
        assertTrue(element.hasAttribute('prop1'));
        assertTrue(element.hasAttribute('prop2-with-suffix'));
        assertTrue(element.hasAttribute('prop-four'));
        // Attribute -> property
        element.toggleAttribute('prop1', false);
        element.toggleAttribute('prop2-with-suffix', false);
        element.toggleAttribute('prop-four', false);
        await microtasksFinished();
        assertFalse(element.prop1);
        assertFalse(element.prop2WithSuffix);
        assertFalse(element.propFour);
        // Non-reflected property doesn't show up in attribute, but should observe
        // attribute changes.
        assertFalse(element.hasAttribute('prop3'));
        assertFalse(element.prop3);
        element.toggleAttribute('prop3', true);
        await microtasksFinished();
        assertTrue(element.prop3);
    });
});
suite('CrLitElement accessor', function () {
    class CrDummyPropertiesWithAccessorElement extends CrLitElement {
        static get is() {
            return 'cr-dummy-properties-with-accessor';
        }
        static get properties() {
            return {
                // Disable @webui-eslint/polymer-property-class-member since the code
                // below simulates TypeScript's JS output when class properties are
                // replaced with getter/setter pairs.
                propReflected: {
                    type: String,
                    reflect: true,
                },
                propNonReflected: { type: String },
            };
        }
        #propReflected_accessor_storage = 'initial';
        get propReflected() { return this.#propReflected_accessor_storage; }
        set propReflected(value) { this.#propReflected_accessor_storage = value; }
        #propNonReflected_accessor_storage = 'initial';
        get propNonReflected() { return this.#propNonReflected_accessor_storage; }
        set propNonReflected(value) { this.#propNonReflected_accessor_storage = value; }
        willUpdate(changedProperties) {
            super.willUpdate(changedProperties);
            willUpdateCalls.push(changedProperties);
        }
        updated(changedProperties) {
            super.updated(changedProperties);
            updatedCalls.push(changedProperties);
        }
    }
    customElements.define(CrDummyPropertiesWithAccessorElement.is, CrDummyPropertiesWithAccessorElement);
    let willUpdateCalls = [];
    let updatedCalls = [];
    function assertChangedProperties(changedProperties, propReflected, propNonReflected) {
        assertTrue(changedProperties.has('propReflected'));
        assertEquals(propReflected, changedProperties.get('propReflected'));
        assertTrue(changedProperties.has('propNonReflected'));
        assertEquals(propNonReflected, changedProperties.get('propNonReflected'));
    }
    setup(() => {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        willUpdateCalls = [];
        updatedCalls = [];
    });
    test('InitialValuesOnly', async function () {
        const element = document.createElement(CrDummyPropertiesWithAccessorElement.is);
        document.body.appendChild(element);
        // Check initial state.
        assertEquals('initial', element.propReflected);
        assertEquals('initial', element.propNonReflected);
        // Check `changedProperties` in initial willUpdate call.
        assertEquals(1, willUpdateCalls.length);
        assertChangedProperties(willUpdateCalls[0], undefined, undefined);
        // Check `changedProperties` in initial updated call.
        assertEquals(1, updatedCalls.length);
        assertChangedProperties(updatedCalls[0], undefined, undefined);
        // Check that initial value is reflected correctly.
        assertEquals('initial', element.getAttribute('prop-reflected'));
        assertFalse(element.hasAttribute('prop-non-reflected'));
        element.propReflected = 'other1';
        element.propNonReflected = 'other1';
        await microtasksFinished();
        // Check `changedProperties` in 2nd willUpdate call.
        assertEquals(2, willUpdateCalls.length);
        assertChangedProperties(willUpdateCalls[1], 'initial', 'initial');
        // Check `changedProperties` in 2nd updated call.
        assertEquals(2, updatedCalls.length);
        assertChangedProperties(updatedCalls[1], 'initial', 'initial');
        // Check property -> attribute
        assertEquals('other1', element.getAttribute('prop-reflected'));
        assertFalse(element.hasAttribute('prop-non-reflected'));
        element.setAttribute('prop-reflected', 'other2');
        element.setAttribute('prop-non-reflected', 'other2');
        await microtasksFinished();
        // Check `changedProperties` in 3rd willUpdate call.
        assertEquals(3, willUpdateCalls.length);
        assertChangedProperties(willUpdateCalls[2], 'other1', 'other1');
        // Check `changedProperties` in 3rd updated call.
        assertEquals(3, updatedCalls.length);
        assertChangedProperties(updatedCalls[2], 'other1', 'other1');
        // Check attribute -> property
        assertEquals('other2', element.propReflected);
        // Non-reflected property changes don't update the attribute, but the
        // property updates when the attribute changes.
        assertEquals('other2', element.propNonReflected);
    });
    test('InitialAndInheritedValues', async function () {
        document.body.innerHTML = getTrustedHTML `
       <cr-dummy-properties-with-accessor
           prop-reflected="inherited" prop-non-reflected="inherited">
       </cr-dummy-properties-with-accessor>
    `;
        const element = document.body.querySelector(CrDummyPropertiesWithAccessorElement.is);
        // Check initial state.
        assertEquals('inherited', element.propReflected);
        assertEquals('inherited', element.propNonReflected);
        // Check `changedProperties` in initial willUpdate call.
        assertEquals(1, willUpdateCalls.length);
        assertChangedProperties(willUpdateCalls[0], undefined, undefined);
        // Check `changedProperties` in initial updated call.
        assertEquals(1, updatedCalls.length);
        assertChangedProperties(updatedCalls[0], undefined, undefined);
        element.propReflected = 'other1';
        element.propNonReflected = 'other1';
        await microtasksFinished();
        // Check `changedProperties` in 2nd willUpdate call.
        assertEquals(2, willUpdateCalls.length);
        assertChangedProperties(willUpdateCalls[1], 'inherited', 'inherited');
        // Check `changedProperties` in 2nd updated call.
        assertEquals(2, updatedCalls.length);
        assertChangedProperties(updatedCalls[1], 'inherited', 'inherited');
        // Check property -> attribute
        assertEquals('other1', element.getAttribute('prop-reflected'));
        // Check that non-reflected property leaves the attribute unaffected.
        assertEquals('inherited', element.getAttribute('prop-non-reflected'));
        element.setAttribute('prop-reflected', 'other2');
        element.setAttribute('prop-non-reflected', 'other2');
        await microtasksFinished();
        // Check `changedProperties` in 3rd willUpdate call.
        assertEquals(3, willUpdateCalls.length);
        assertChangedProperties(willUpdateCalls[2], 'other1', 'other1');
        // Check `changedProperties` in 3rd updated call.
        assertEquals(3, updatedCalls.length);
        assertChangedProperties(updatedCalls[2], 'other1', 'other1');
        // Check attribute -> property
        assertEquals('other2', element.propReflected);
        // Non-reflected property changes don't update the attribute, but the
        // property updates when the attribute changes.
        assertEquals('other2', element.propNonReflected);
    });
});
