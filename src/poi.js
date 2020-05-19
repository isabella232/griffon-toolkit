
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

import kit from './kit';
import schema from '../schemas/poi.json';

/**
 * Contains constants and functions for a POI Object.
 *
 * The structure for a POI Object is as follows:
 * ```
 * {
 *   latitude: <number>,
 *   libraryid: <string>,
 *   longitude: <number>,
 *   regionname: <string>,
 *   regionmetadata: {
 *     category: <string>,
 *     city: <string>,
 *     country: <string>,
 *     state: <string>,
 *     street: <string>,
 *   },
 *   radius: <number>,
 *   regionid: <string>,
 *   useriswithin: <boolean>,
 *   weight: <number>,
 *   type: <string>,
 *   uuid: <string>,
 * }
 * ```
 *
 * @namespace poi
 */

/* ADD CUSTOM CONTENT BELOW */

// additional exports should be added here:
const customExports = {};

/* END CUSTOM CONTENT */
/* The content below is autogenerated. Do not make any changes */

/**
 * Paths for the keys on a POI Object
 *
 * @enum {string}
 */
const path = {
  /** The POI latitude.<br />Path is `latitude`. */
  latitude: 'latitude',

  /** The Places library the POI belongs to.<br />Path is `libraryid`. */
  libraryId: 'libraryid',

  /** The POI longitude.<br />Path is `longitude`. */
  longitude: 'longitude',

  /** The POI name.<br />Path is `regionname`. */
  name: 'regionname',

  /** An object with some defined items and custom data items..<br />Path is `regionmetadata`. */
  metadata: 'regionmetadata',

  /** The POI category.<br />Path is `regionmetadata.category`. */
  category: 'regionmetadata.category',

  /** The POI city.<br />Path is `regionmetadata.city`. */
  city: 'regionmetadata.city',

  /** The POI country.<br />Path is `regionmetadata.country`. */
  country: 'regionmetadata.country',

  /** The POI state.<br />Path is `regionmetadata.state`. */
  state: 'regionmetadata.state',

  /** The POI street.<br />Path is `regionmetadata.street`. */
  street: 'regionmetadata.street',

  /** The POI radius.<br />Path is `radius`. */
  radius: 'radius',

  /** The unique region id.<br />Path is `regionid`. */
  id: 'regionid',

  /** Is the user currently in the POI.<br />Path is `useriswithin`. */
  within: 'useriswithin',

  /** The weight of the POI. It is used to prioritze POIs when a user is inside multile POIS.<br />Path is `weight`. */
  weight: 'weight',

  /** This is to scope annotations and prevent overwrites from other plugins. The type is usually deteremined by the plugin writing the annotation.<br />Path is `type`. */
  type: 'type',

  /** Uniquely identifies each annotation.<br />Path is `uuid`. */
  uuid: 'uuid'
};


/**
 * Returns the `latitude` from the POI Object.
 * This is the the POI latitude.
 *
 * Path is `latitude`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {number}
 */
const getLatitude = kit.search(path.latitude);

/**
 * Returns the `libraryId` from the POI Object.
 * This is the the Places library the POI belongs to.
 *
 * Path is `libraryid`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {string}
 */
const getLibraryId = kit.search(path.libraryId);

/**
 * Returns the `longitude` from the POI Object.
 * This is the the POI longitude.
 *
 * Path is `longitude`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {number}
 */
const getLongitude = kit.search(path.longitude);

/**
 * Returns the `name` from the POI Object.
 * This is the the POI name.
 *
 * Path is `regionname`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {string}
 */
const getName = kit.search(path.name);

/**
 * Returns the `metadata` from the POI Object.
 * This is the an object with some defined items and custom data items..
 *
 * Path is `regionmetadata`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {object}
 */
const getMetadata = kit.search(path.metadata);

/**
 * Returns the data using the specified path from the metadata
 * of the POI Object.
 *
 * @function
 * @param {...string} path key in object
 * @param {object} source The POI Object instance
 * @returns {*}
 */
const getMetadataKey = kit.curry(
  (searchPath, source) => kit.search(`${path.metadata}.${searchPath}`, source)
);

/**
 * Returns the `category` from the POI Object.
 * This is the the POI category.
 *
 * Path is `regionmetadata.category`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {string}
 */
const getCategory = kit.search(path.category);

/**
 * Returns the `city` from the POI Object.
 * This is the the POI city.
 *
 * Path is `regionmetadata.city`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {string}
 */
const getCity = kit.search(path.city);

/**
 * Returns the `country` from the POI Object.
 * This is the the POI country.
 *
 * Path is `regionmetadata.country`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {string}
 */
const getCountry = kit.search(path.country);

/**
 * Returns the `state` from the POI Object.
 * This is the the POI state.
 *
 * Path is `regionmetadata.state`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {string}
 */
const getState = kit.search(path.state);

/**
 * Returns the `street` from the POI Object.
 * This is the the POI street.
 *
 * Path is `regionmetadata.street`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {string}
 */
const getStreet = kit.search(path.street);

/**
 * Returns the `radius` from the POI Object.
 * This is the the POI radius.
 *
 * Path is `radius`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {number}
 */
const getRadius = kit.search(path.radius);

/**
 * Returns the `id` from the POI Object.
 * This is the the unique region id.
 *
 * Path is `regionid`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {string}
 */
const getId = kit.search(path.id);

/**
 * Returns the `within` from the POI Object.
 * This is the is the user currently in the POI.
 *
 * Path is `useriswithin`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {boolean}
 */
const getWithin = kit.search(path.within);

/**
 * Returns the `weight` from the POI Object.
 * This is the the weight of the POI. It is used to prioritze POIs when a user is inside multile POIS.
 *
 * Path is `weight`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {number}
 */
const getWeight = kit.search(path.weight);

/**
 * Returns the `type` from the POI Object.
 * This is the this is to scope annotations and prevent overwrites from other plugins. The type is usually deteremined by the plugin writing the annotation.
 *
 * Path is `type`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {string}
 */
const getType = kit.search(path.type);

/**
 * Returns the `uuid` from the POI Object.
 * This is the uniquely identifies each annotation.
 *
 * Path is `uuid`.
 *
 * @function
 * @param {object} source The POI Object instance
 * @returns {string}
 */
const getUuid = kit.search(path.uuid);


/**
 * Generates a POI Object with some default values set.
 * Can be useful in testing.
 * Can override defaults and provide additional data by providing a flat object
 * of paths and values.
 *
 * @function
 * @param {...Function} input Overrides
 * @returns {object}
 */
const mock = (input) => kit.expand({
  latitude: 40.4045982,
  libraryid: '04213',
  longitude: -111.8636017,
  regionname: 'Adobe',
  radius: 375,
  regionid: '31512',
  useriswithin: false,
  weight: 2,
  type: 'test_suite',
  uuid: '423',
  ...input
});

/**
 * Validates the POI Object against the json schema
 *
 * @function
 * @param {object} source The POI Object
 * @returns {boolean}
 */
const validate = kit.validateSchema(schema);

export default {
  path,
  mock,
  schema,
  validate,
  ...customExports,
  getLatitude,
  getLibraryId,
  getLongitude,
  getName,
  getMetadata,
  getMetadataKey,
  getCategory,
  getCity,
  getCountry,
  getState,
  getStreet,
  getRadius,
  getId,
  getWithin,
  getWeight,
  getType,
  getUuid
};
