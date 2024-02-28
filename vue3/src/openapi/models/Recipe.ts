/* tslint:disable */
/* eslint-disable */
/**
 * Django Recipes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CustomFilterSharedInner } from './CustomFilterSharedInner';
import {
    CustomFilterSharedInnerFromJSON,
    CustomFilterSharedInnerFromJSONTyped,
    CustomFilterSharedInnerToJSON,
} from './CustomFilterSharedInner';
import type { FoodPropertiesInner } from './FoodPropertiesInner';
import {
    FoodPropertiesInnerFromJSON,
    FoodPropertiesInnerFromJSONTyped,
    FoodPropertiesInnerToJSON,
} from './FoodPropertiesInner';
import type { RecipeKeywordsInner } from './RecipeKeywordsInner';
import {
    RecipeKeywordsInnerFromJSON,
    RecipeKeywordsInnerFromJSONTyped,
    RecipeKeywordsInnerToJSON,
} from './RecipeKeywordsInner';
import type { RecipeNutrition } from './RecipeNutrition';
import {
    RecipeNutritionFromJSON,
    RecipeNutritionFromJSONTyped,
    RecipeNutritionToJSON,
} from './RecipeNutrition';
import type { RecipeStepsInner } from './RecipeStepsInner';
import {
    RecipeStepsInnerFromJSON,
    RecipeStepsInnerFromJSONTyped,
    RecipeStepsInnerToJSON,
} from './RecipeStepsInner';

/**
 * 
 * @export
 * @interface Recipe
 */
export interface Recipe {
    /**
     * 
     * @type {number}
     * @memberof Recipe
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    description?: string | null;
    /**
     * 
     * @type {Blob}
     * @memberof Recipe
     */
    readonly image?: Blob | null;
    /**
     * 
     * @type {Array<RecipeKeywordsInner>}
     * @memberof Recipe
     */
    keywords?: Array<RecipeKeywordsInner>;
    /**
     * 
     * @type {Array<RecipeStepsInner>}
     * @memberof Recipe
     */
    steps: Array<RecipeStepsInner>;
    /**
     * 
     * @type {number}
     * @memberof Recipe
     */
    workingTime?: number;
    /**
     * 
     * @type {number}
     * @memberof Recipe
     */
    waitingTime?: number;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    readonly createdBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof Recipe
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Recipe
     */
    readonly updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    sourceUrl?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Recipe
     */
    internal?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Recipe
     */
    showIngredientOverview?: boolean;
    /**
     * 
     * @type {RecipeNutrition}
     * @memberof Recipe
     */
    nutrition?: RecipeNutrition | null;
    /**
     * 
     * @type {Array<FoodPropertiesInner>}
     * @memberof Recipe
     */
    properties?: Array<FoodPropertiesInner>;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    readonly foodProperties?: string;
    /**
     * 
     * @type {number}
     * @memberof Recipe
     */
    servings?: number;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    filePath?: string;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    servingsText?: string;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    readonly rating?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Recipe
     */
    readonly lastCooked?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof Recipe
     */
    _private?: boolean;
    /**
     * 
     * @type {Array<CustomFilterSharedInner>}
     * @memberof Recipe
     */
    shared?: Array<CustomFilterSharedInner>;
}

/**
 * Check if a given object implements the Recipe interface.
 */
export function instanceOfRecipe(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "steps" in value;

    return isInstance;
}

export function RecipeFromJSON(json: any): Recipe {
    return RecipeFromJSONTyped(json, false);
}

export function RecipeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Recipe {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'keywords': !exists(json, 'keywords') ? undefined : ((json['keywords'] as Array<any>).map(RecipeKeywordsInnerFromJSON)),
        'steps': ((json['steps'] as Array<any>).map(RecipeStepsInnerFromJSON)),
        'workingTime': !exists(json, 'working_time') ? undefined : json['working_time'],
        'waitingTime': !exists(json, 'waiting_time') ? undefined : json['waiting_time'],
        'createdBy': !exists(json, 'created_by') ? undefined : json['created_by'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'sourceUrl': !exists(json, 'source_url') ? undefined : json['source_url'],
        'internal': !exists(json, 'internal') ? undefined : json['internal'],
        'showIngredientOverview': !exists(json, 'show_ingredient_overview') ? undefined : json['show_ingredient_overview'],
        'nutrition': !exists(json, 'nutrition') ? undefined : RecipeNutritionFromJSON(json['nutrition']),
        'properties': !exists(json, 'properties') ? undefined : ((json['properties'] as Array<any>).map(FoodPropertiesInnerFromJSON)),
        'foodProperties': !exists(json, 'food_properties') ? undefined : json['food_properties'],
        'servings': !exists(json, 'servings') ? undefined : json['servings'],
        'filePath': !exists(json, 'file_path') ? undefined : json['file_path'],
        'servingsText': !exists(json, 'servings_text') ? undefined : json['servings_text'],
        'rating': !exists(json, 'rating') ? undefined : json['rating'],
        'lastCooked': !exists(json, 'last_cooked') ? undefined : (json['last_cooked'] === null ? null : new Date(json['last_cooked'])),
        '_private': !exists(json, 'private') ? undefined : json['private'],
        'shared': !exists(json, 'shared') ? undefined : ((json['shared'] as Array<any>).map(CustomFilterSharedInnerFromJSON)),
    };
}

export function RecipeToJSON(value?: Recipe | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'keywords': value.keywords === undefined ? undefined : ((value.keywords as Array<any>).map(RecipeKeywordsInnerToJSON)),
        'steps': ((value.steps as Array<any>).map(RecipeStepsInnerToJSON)),
        'working_time': value.workingTime,
        'waiting_time': value.waitingTime,
        'source_url': value.sourceUrl,
        'internal': value.internal,
        'show_ingredient_overview': value.showIngredientOverview,
        'nutrition': RecipeNutritionToJSON(value.nutrition),
        'properties': value.properties === undefined ? undefined : ((value.properties as Array<any>).map(FoodPropertiesInnerToJSON)),
        'servings': value.servings,
        'file_path': value.filePath,
        'servings_text': value.servingsText,
        'private': value._private,
        'shared': value.shared === undefined ? undefined : ((value.shared as Array<any>).map(CustomFilterSharedInnerToJSON)),
    };
}

