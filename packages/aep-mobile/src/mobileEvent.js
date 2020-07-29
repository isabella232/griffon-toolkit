
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import * as R from 'ramda';
import * as kit from '@adobe/griffon-toolkit';
import schema from '../schemas/mobileEvent.json';

/**
 * Contains constants and functions for a Generic Mobile Event.
 *
 * The structure for a Generic Mobile Event is as follows:
 * ```
 * {
 *   payload: {
 *     ACPExtensionEventData: <object>,
 *     ACPExtensionEventName: <string>,
 *     ACPExtensionEventNumber: <integer>,
 *     ACPExtensionEventSource: <string>,
 *     ACPExtensionEventType: <string>,
 *     ACPExtensionEventUniqueIdentifier: <string>,
 *   },
 *   type: 'generic'
 *   vendor: <string>,
 *   annotations: <array>,
 *   clientId: <string>,
 *   timestamp: <number>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace mobileEvent
 */

/**
 * Paths for the keys on a Generic Mobile Event
 *
 * @enum {string}
 */
const path = {
  /** An object with custom data describing the event.<br />Path is `payload`. */
  payload: 'payload',

  /** An object with the custom data describing the event.<br />Path is `payload.ACPExtensionEventData`. */
  eventData: 'payload.ACPExtensionEventData',

  /** The name of the event.<br />Path is `payload.ACPExtensionEventName`. */
  eventName: 'payload.ACPExtensionEventName',

  /** The event number generated by the SDK.<br />Path is `payload.ACPExtensionEventNumber`. */
  sdkEventNumber: 'payload.ACPExtensionEventNumber',

  /** The event source.<br />Path is `payload.ACPExtensionEventSource`. */
  eventSource: 'payload.ACPExtensionEventSource',

  /** The event type.<br />Path is `payload.ACPExtensionEventType`. */
  eventType: 'payload.ACPExtensionEventType',

  /** The unique event id.<br />Path is `payload.ACPExtensionEventUniqueIdentifier`. */
  eventId: 'payload.ACPExtensionEventUniqueIdentifier',

  /** The type of event.<br />Path is `type`. */
  rootType: 'type',

  /** The vendor of the plugin that sent the event.<br />Path is `vendor`. */
  vendor: 'vendor',

  /** Array of Annotation objects.<br />Path is `annotations`. */
  annotations: 'annotations',

  /** A unique id that differentiates clients from one another.<br />Path is `clientId`. */
  clientId: 'clientId',

  /** When the event occurred.<br />Path is `timestamp`. */
  timestamp: 'timestamp',

  /** Uniquely identifies each event.<br />Path is `uuid`. */
  rootId: 'uuid'
};

/**
 * Describes the number of parents this object has based off schema references. When checking for matches for example, we want to
 * use a schema that is more specific over a more generic schema
 *
 * @constant
 */
const parentDepth = 1;

/**
 * A label that can be used when describing this object
 */
const label = 'Generic Mobile Event';

/**
 * A grouping for this object
 */
const group = 'event';

/**
 * The value for `rootType` for a Generic Mobile Event.
 *
 * Path is `type`.
 *
 * @constant
 */
const ROOT_TYPE = 'generic';

/**
 * Retrieves a value from the object. You can provide either a path or an alias.
 *
 * @function
 * @param path or alias
 * @param {*} data Data to search
 * @returns {*}
 */
const get = R.curry((alias, data) => kit.search(path[alias] || alias, data));

/**
 * Returns the `eventData` from the Generic Mobile Event.
 * This is the an object with the custom data describing the event.
 *
 * Path is `payload,ACPExtensionEventData`.
 *
 * @function
 * @param {object} source The Generic Mobile Event instance
 * @returns {object}
 */
const getEventData = kit.search(path.eventData);

/**
 * Returns the data using the specified path from the eventData
 * of the Generic Mobile Event.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The Generic Mobile Event instance
 * @returns {*}
 */
const getEventDataKey = kit.curry(
  (searchPath, source) => kit.search(`${path.eventData}.${searchPath}`, source)
);

/**
 * Returns the `eventName` from the Generic Mobile Event.
 * This is the the name of the event.
 *
 * Path is `payload,ACPExtensionEventName`.
 *
 * @function
 * @param {object} source The Generic Mobile Event instance
 * @returns {string}
 */
const getEventName = kit.search(path.eventName);

/**
 * Returns the `sdkEventNumber` from the Generic Mobile Event.
 * This is the the event number generated by the SDK.
 *
 * Path is `payload,ACPExtensionEventNumber`.
 *
 * @function
 * @param {object} source The Generic Mobile Event instance
 * @returns {number}
 */
const getSdkEventNumber = kit.search(path.sdkEventNumber);

/**
 * Returns the `eventSource` from the Generic Mobile Event.
 * This is the the event source.
 *
 * Path is `payload,ACPExtensionEventSource`.
 *
 * @function
 * @param {object} source The Generic Mobile Event instance
 * @returns {string}
 */
const getEventSource = kit.search(path.eventSource);

/**
 * Returns the `eventType` from the Generic Mobile Event.
 * This is the the event type.
 *
 * Path is `payload,ACPExtensionEventType`.
 *
 * @function
 * @param {object} source The Generic Mobile Event instance
 * @returns {string}
 */
const getEventType = kit.search(path.eventType);

/**
 * Returns the `eventId` from the Generic Mobile Event.
 * This is the the unique event id.
 *
 * Path is `payload,ACPExtensionEventUniqueIdentifier`.
 *
 * @function
 * @param {object} source The Generic Mobile Event instance
 * @returns {string}
 */
const getEventId = kit.search(path.eventId);

/**
 * Returns the `vendor` from the Generic Mobile Event.
 * This is the the vendor of the plugin that sent the event.
 *
 * Path is `vendor`.
 *
 * @function
 * @param {object} source The Generic Mobile Event instance
 * @returns {string}
 */
const getVendor = kit.search(path.vendor);

/**
 * Matcher can be used to find matching Generic Mobile Event objects.
 *
 * @see kit.match
 * @constant
 */
const matcher = kit.combineAll([
  'payload.ACPExtensionEventSource',
  'payload.ACPExtensionEventType',
  'type==\'generic\'',
  'timestamp'
]);

/**
 * Tests the provided source against the matcher to see if it's Generic Mobile Event event.
 *
 * @function
 * @param {object} source The Generic Mobile Event instance
 * @returns {boolean}
 * @see kit.isMatch
 */
const isMatch = (source) => kit.isMatch(matcher, source);

/**
 * Generates a Generic Mobile Event with the const values set.
 * Can be useful in testing.
 * Can provide additional data by providing a flat object of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const make = (input) => kit.expandWithPaths(path, {
  rootType: 'generic',
  ...input
});

/**
 * Generates a Generic Mobile Event with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expandWithPaths(path, {
  eventSource: 'com.adobe.eventsource.responsecontent',
  eventType: 'test event',
  rootType: 'generic',
  vendor: 'com.adobe.mobile.sdk',
  clientId: 'appleABC',
  timestamp: Date.parse('12 Jan 2020 07:23:17 GMT'),
  rootId: '123',
  ...input
});


/* ADD CUSTOM CONTENT BELOW */

// additional exports should be added here:
const customExports = {};

/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */

export default {
  path,
  mock,
  make,
  schema,
  get,
  ...customExports,
  getEventData,
  getEventDataKey,
  getEventName,
  getSdkEventNumber,
  getEventSource,
  getEventType,
  getEventId,
  getVendor,
  isMatch,
  matcher,
  ROOT_TYPE,
  label,
  group,
  parentDepth
};
